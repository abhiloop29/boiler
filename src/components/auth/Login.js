import React from 'react';
import { LockOutlined, UserOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import "./auth.scss";
import { HeadingText2, NormalText } from '../ui-components/Text';

const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <>
            <section className='login'>
                <div className='login-form'>
                    <Form
                        name="normal_login"
                        className=""
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <HeadingText2 children="Agent Login" className="mb-2 text-center" />
                        <NormalText children="Hey, Enter your details to get sign in to your account" className="mb-4 text-center" />
                        <Form.Item
                            name="username"
                            className='mb-2'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            className='mb-2'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle className='mb-2'>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </div>
            </section>
        </>
    )
}

export default Login