import React, { useState } from 'react';
import './CreateYourOwn.css';
import ImageGenerator from './ImageGenerator';
import { UploadOutlined } from '@ant-design/icons';
import createProducts from './ListCreateShoes';
import { Button, ConfigProvider, Upload, message } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function CreateYourOwn() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [idea, setIdea] = useState('');

  const [imageUrls, setImageUrls] = useState([]);

  const handleSubmit = async () => {
    const product = createProducts.find(p => p.id === selectedProduct);
    //   if (!selectedProduct) {
    //   message.error('Please select a product.');
    //   return;
    // }
    const design = {
      firstName,
      lastName,
      email,
      product: selectedProduct,
      selectedSize,
      imageUrls,
      idea,
    };
    console.log(design)
    try {
      await axios.post('https://6535e178c620ba9358ecbd6c.mockapi.io/shoes/orderInfor', design);
      message.success('Your design has been submitted successfully!', 3);
    } catch (error) {
      console.error('Failed to submit design:', error);
      // message.error('Failed to submit your design. Please try again.', 3);
    }
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG files!');
    } else {
      getBase64(file, imageUrl => {
        if (imageUrls.includes(imageUrl)) {
          message.error('You cannot upload duplicate images!');
        } else {
          setImageUrls(prevState => [...prevState, imageUrl]);
        }
      });
    }
    // Prevent upload
    return false;
  }

  const handleChange = info => {
    if (info.file.status === 'error') {
      getBase64(info.file.originFileObj, imageUrl => setImageUrls(prevState => [...prevState, imageUrl]));
    }
  };

  const handleDelete = (url) => {
    setImageUrls(prevState => prevState.filter(imageUrl => imageUrl !== url));
  };


  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedProduct(selectedValue);
  };


  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleIdeaChange = (e) => {
    setIdea(e.target.value);
  };


  return (
    <div className='create-your-own-page'>
      <div className='create-your-own-container'>
        <div className='create-your-own-title'>
          <h1>CREATE YOUR OWN</h1>
        </div>
        <div className='form-container'>
          <div className='form-design'>
            <div className='form-title'>
              <h1>Customize Your Sneaker</h1>
            </div>
            <div className='provide-infor'>
              <div className='provide-name'>
                <label className='first-name'>
                  First Name:
                  <input type="text" value={firstName} onChange={handleFirstNameChange} />
                </label>
                <br />
                <label className='last-name'>
                  Last Name:
                  <input type="text" value={lastName} onChange={handleLastNameChange} />
                </label>
              </div>

              <div className='provide-email'>
                <form>
                  <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" className='width-100' />
                  </label>
                </form>
              </div>

              <div className='provide-select-shoes'>
                <form>
                  <label>
                    Choose a Shoe:
                    <select value={selectedProduct} onChange={handleSelectChange}>
                      <option value="">Select a shoe</option>
                      {createProducts.map((product) => (
                        <option key={product.id} value={product.id}>
                          {product.name} - ${product.price}
                        </option>
                      ))}
                    </select>
                  </label>
                </form>
              </div>
              <div className='provide-size'>
                <label>
                  Size:
                  <input type="text" value={selectedSize} onChange={handleSizeChange} placeholder="Enter shoe size" />
                </label>
              </div>
              <div className='provide-upload'>
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "black",
                      colorPrimaryHover: "rgba(0, 0, 0, 1)",
                      borderRadiusLG: 0,
                      controlHeightLG: 55
                    },
                  }}
                >
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                  >
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                  {imageUrls.map((url, index) => (
                    <div className='upload-content' key={index}>
                      <img className="upload-image" src={url} alt={`avatar${index}`} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                      <Button className="upload-button" onClick={() => handleDelete(url)}>x</Button>
                    </div>
                  ))}
                </ConfigProvider>
              </div>
              <div className='provide-idea'>
                <label>
                  Idea:
                  <br />
                  <textarea
                    value={idea}
                    onChange={handleIdeaChange}
                    placeholder="Enter your idea..."
                    rows="5"
                  />
                </label>
              </div>
              <div className='submit-button'>
                <Button type="primary" onClick={handleSubmit}>Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
}
