import React from "react";
import "./Create.css";
import { Button, Checkbox, Form, Input, Modal, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function CreateAccount() {
    const checkUsernameOrEmailExists = async (username, email) => {
        try {
            const response = await axios.get('https://6538e61aa543859d1bb22827.mockapi.io/api/users');
            const users = response.data;
            return users.some(user => user.username === username || user.email === email);
        } catch (error) {
            console.error(error);
        }
    }

    const navigate = useNavigate();
    const register = async (values) => {
        try {
            const response = await axios.post('https://6538e61aa543859d1bb22827.mockapi.io/api/users', values);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const onFinish = async(values) => {      
        const { username, email } = values;
        const exists = await checkUsernameOrEmailExists(username, email);
        if(exists) {
            Modal.confirm({
                title: '😢 Account Creation Failed',
                content: 'Username or email already exists. Do you want to reload the page?',
                onOk() {
                    window.location.reload();
                },
                style: { top: '50%', transform: 'translateY(-50%)' },
            });
            } else {
                console.log("Success:", values);
                message.success("Your account have been created successfully", 3)
                register(values);
                navigate('/Login');
        }
    }
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
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
                            label="Full Name"
                            name="full-name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Full Name!",
                                },
                                {
                                    pattern: /^.{1,15}$/,
                                    message: "Full Name must be a string from 1 - 15 characters",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your email!",
                                },
                                {
                                    pattern: /^[a-zA-Z0-9]+@gmail\.com$/,
                                    message: "Email must be end with '@gmail.com'",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Phone Number"
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your phone number!",
                                },
                                {
                                    pattern: /^\d{10}$/,
                                    message: "Phone number must be a filled with 10 numbers",
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
                                    required: true,
                                    message: "Please input your username!",
                                },
                                {
                                    pattern: /^.{1,10}$/,
                                    message: "Username must be from 1 - 10 characters",
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
                                    required: true,
                                    message: "Please input your password!",
                                },
                                {
                                    pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{1,15}$/,
                                    message: "Password must have at least 1 special character, 1 number, and filled with 1 - 15 characters",
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
