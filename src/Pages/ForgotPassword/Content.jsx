import React from 'react'
import './Content.css'
import { Button, Checkbox, Form, Input } from 'antd';
export default function Content() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='forgotpw'>
      <h1>Reset Your Password</h1>
      <p>We will send you an email to reset your password</p>
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
      width: "100%",
      marginRight: "200px",
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Email"
      name="txtEmail"
      rules={[
        {
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
     <div  className='submit-forgotpw'>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
      </div>
    </Form.Item>
  </Form>

    </div>
  )
}
