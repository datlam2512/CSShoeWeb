import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import './Contact.css'
export default function () {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div className='Contact'>
        <h1 className='Contact-h1'>Contact</h1>
        <div className='form-contact' >
            <p>Don’t hesitate to contact with us, we are always here to listen.....</p>
            <div className='contact-component'>
             <div className='Name-email'>
             <Form
             className='input-contact'
    name="basic"
   
    style={{
      maxWidth: 700,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item  className="Form-input"
      label="Name"
      name="txtName"
      rules={[
        {
          required: true,
          message: 'Please input your Name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item className="Form-input"
      label="Email"
      name="txtEmail"
      rules={[
        {
          required: true,
          message: 'Please input your Email!',
        },
      ]}
    >
        <Input />
    </Form.Item>
  </Form>
             </div>
             <Form    
    name="basic"
   
    style={{
      maxWidth: 480,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item className="Form-input"
      label="Phone"
      name="txtPhone"
      rules={[
        {
          required: true,
          message: 'Please input your Phone!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item name="txtMessage" label="Message" className="Form-input">
      <Input.TextArea className='input' />
    </Form.Item>
    <div  className='submit-contact'>
      <button className='contact-button' type="primary" htmlType="submit">
        Send
      </button>
      </div>
  </Form>
  </div>
        </div>
    </div>
  )
}
