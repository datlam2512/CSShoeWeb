import React, { useContext } from "react";
import "./Content.css";
import { Button, Checkbox, Form, Input, message } from "antd";
import { Link , useNavigate } from "react-router-dom";
import { loginUser } from "./api";
import { UserContext } from "../../context/user-context";
export default function Content() {
  const { setUser } = React.useContext(UserContext);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const { userName, password } = values;
    try {
      const user = await loginUser(userName, password);
      if (user) {
        console.log('Logged in user:', user);
        setUser(user);
        navigate('/');
        message.success(`Welcome, ${user.Username}`, 3);
      } else {
        console.error('Invalid username or password');
        message.error('Your username or password is incorrect', 3);
      }
    } catch (error) {
      console.error('Login failed:', error);
      message.error('Login failed', 3);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="content">
      <h1>Login</h1>
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
          className="Form-input"
          label={<p>Username</p>}
          name="userName"
          rules={[
            {
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className="Form-input"
          label={<p>Password</p>}
          name="password"
          rules={[
            {
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox className="chkremember">Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <button>Submit</button>
          <Link className="forgotpassword" to={"/forgot"}>
            <p>Forgot Your Password?</p>
          </Link>
          <Link className="createaccount" to={"/create"}>
            <p>Create Account</p>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
}
