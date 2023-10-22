import React, { useState } from 'react';
import './CreateYourOwn.css';
import ImageGenerator from './ImageGenerator';
import { UploadOutlined } from '@ant-design/icons';
// Import danh sách sản phẩm từ file bạn đã cung cấp
import createProducts from './ListCreateShoes';
import { Button, ConfigProvider, Upload } from 'antd';

export default function CreateYourOwn() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(''); // Sản phẩm được chọn
  const [selectedSize, setSelectedSize] = useState(''); // Kích thước giày được chọn
  const [idea, setIdea] = useState(''); // Ý tưởng

  const handleSelectChange = (e) => {
    setSelectedProduct(e.target.value);
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
              <h1>Create your Own Sneaker</h1>
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
                    <input type="email" value={email} placeholder="Enter your email" className='width-100'/>
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
                  <Upload>
                    <Button icon={<UploadOutlined />}>Choose your Design</Button>
                  </Upload>
                </ConfigProvider>

              </div>
              <div className='provide-idea'>
                <label >
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
