import React, { useContext, useState, useEffect } from 'react';
import './AdminEditProduct.css';
import { Link, useParams } from 'react-router-dom';
import products from '../Shop/ProductList';
import { ShopContext } from '../../context/shop-context';
import Swal from 'sweetalert2';
import axios from 'axios';
import API from '../../config/api';
import { faL } from '@fortawesome/free-solid-svg-icons';


const AdminEditProduct = () => {
    const [shoes, setShoes] = useState(null);
    const [file, setFile] = useState(null)
    const [listBrand, setListBrand] = useState([])
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [brand, setBrand] = useState("")
    const [urlImg, setUrlImg] = useState("")
    const [loading, setLoading] = useState(false)

    const param = useParams();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await API.getProductById(param.id)
                setName(res.data.name)
                setPrice(res.data.price)
                setBrand(res.data.brand.BrandID)
                setUrlImg(res.data.urlImg)
                setShoes(res.data)
            } catch (err) {

            }
        }
        getProduct()
    }, [param.id]);

    useEffect(() => {
        const getBrand = async () => {
            try {
                const res = await API.getBrand()
                setListBrand(res.data)
            } catch (err) {

            }
        }
        getBrand()
    }, [])
    const showAddToCartAlert = () => {
        Swal.fire({
            title: 'Added To Cart Successfully',
            icon: 'success',
            bordered: "none"
        });
    };

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setFile(e.target.files[0])
        }
    };

    const getUrlImg = async () => {
        const formData = new FormData();
        formData.append("image", file);
        try {
            const res = await axios.post("https://api.imgbb.com/1/upload?key=a83bb7b270c95fd8a078837a2d919593", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            return res.data
        } catch (err) {
            return null
        }
    }
    const showMessageError = (message) => {
        Swal.fire({
            title: message,
            icon: 'error',
        });
    };

    const handleSubmit = async () => {
        if (!name || !price) {
            showMessageError("Vui lòng điền đầy đủ thông tin")
            return
        }
        setLoading(true)
        let url = urlImg
        if(file){
            const resUpload = await getUrlImg()
            url = resUpload.data.display_url
        }
        const data = {
            Name: name,
            Price: Number(price),
            BrandID: Number(brand),
            URL: url,
            Description: "Edit shoes"
        }
        console.log(data);
        try {
            const res = await API.updateProduct(param.id, data)
            Swal.fire({
                title: "Lưu thành công",
                icon: 'success',
            });
        } catch (err) {
            showMessageError(err.response.data.message)
        }
        setLoading(false)
    }

    const findBrandId = (name) => {
        for (let i = 0; i < listBrand.length; i++) {
            if (listBrand[i].Name == name) {
                return listBrand[i].BrandID
            }
        }
        return null
    }

    return (
        <div className='container'>
            <div className='mb-6 text-xl'>
                <Link to={'/admin'} className='hover:no-underline'>DashBoard</Link>
            </div>
            {shoes ? (
                <div className='product-detail'>
                    <div className='product-image'>
                        <div>
                            <div>
                                <input type="file" onChange={handleFileChange} />
                                <div className='mt-3'>
                                    <img src={file ? URL.createObjectURL(file) : urlImg} alt="Selected" style={{ maxWidth: '100%' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='product-infor'>
                        <div className='width-product-infor'>
                            <div className='productSingle'>
                                <label style={{ fontFamily: 'Karla, sans-serif' }}>
                                    Tên sản phẩm:
                                </label>
                                <br />
                                <input className='productName mb-3' value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Tên sản phẩm' />
                                <label style={{ fontFamily: 'Karla, sans-serif' }}>
                                    Giá:
                                </label>
                                <br />
                                <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder='Giá' />
                            </div>

                            <form className='payment-form'>
                                <div className='size-selector'>
                                    <label style={{ fontFamily: 'Karla, sans-serif' }}>
                                        Brand:
                                    </label>
                                    <br />
                                    <select
                                        value={brand}
                                        onChange={(e) => setBrand(e.target.value)}
                                        className='w-1/5'
                                        style={{ fontFamily: 'Karla, sans-serif' }}
                                    >
                                        {
                                            listBrand.map((item, index) => (
                                                <option key={index} value={item.BrandID}>{item.Name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </form>

                            <div className='purchase-action'>
                                <div className='addCartBtn'>
                                    {
                                        loading ? <button disabled className='rounded px-4 py-2 bg-blue-300 opacity-50'>Save</button>
                                            : <button onClick={handleSubmit} className='rounded px-4 py-2 bg-blue-500'>Save</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            ) : (
                <p>Loading...</p>
            )
            }
        </div >
    );
}

export default AdminEditProduct;