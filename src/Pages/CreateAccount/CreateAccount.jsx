import React from "react";
import "./Create.css";
import { Button, Checkbox, Form, Input } from 'antd';
export default function CreateAccount() {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };   
  return (
    <div className="main-create">
      <div className="create-content">
        <h1>Create Account</h1>
        <div className="form-input">
        <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
     <Form.Item
      label="FullName"
      name="txtusername"
      rules={[
        {
          message: 'Please input your fullname!',
        },
      ]}
    >
      <Input />
    </Form.Item>
     <Form.Item
      label="Email"
      name="txtemail"
      rules={[
        {
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="PhoneNumber"
      name="txtphone"
      rules={[
        {
          message: 'Please input your phone!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
     <button className="button-create">Create</button>
    </Form.Item>
  </Form>
  </div>
      </div>
    </div>
  );
}
