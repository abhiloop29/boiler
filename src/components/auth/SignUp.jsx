import React from "react";
import {
  LockOutlined,
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  MailOutlined
} from "@ant-design/icons";
import { Checkbox, Col, Form, Input, Row, Select } from "antd";
import "./auth.scss";
import { HeadingText2, NormalText, SpanText } from "../ui-components/Text";
import { MainButton, SecondaryButton } from "../ui-components/Button";
import { RiGoogleFill, RiFacebookFill, RiAppleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { Option } = Select;
  // const onFinish = (values) => {
  //     console.log('Received values of form: ', values);
  // };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70
        }}
        defaultValue="86"
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  return (
    <>
      <section className="login">
        <div className="login-form">
          <Form
            name="normal_signup"
            className=""
            initialValues={{
              remember: true
            }}
            // onFinish={onFinish}
          >
            <HeadingText2 className="mb-2 text-center">Sign Up</HeadingText2>
            <NormalText className="mb-4 text-center">
              Hey, Enter your details to get sign in to your account
            </NormalText>
            <Row gutter={16}>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <Form.Item
                  name="firstname"
                  className="mb-2"
                  rules={[
                    {
                      required: true,
                      message: "Please input your firstname!"
                    }
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="First Name"
                  />
                </Form.Item>
              </Col>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <Form.Item
                  name="lastname"
                  className="mb-2"
                  rules={[
                    {
                      required: true,
                      message: "Please input your lastname!"
                    }
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Last Name"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              name="email"
              className="mb-2"
              rules={[
                {
                  type: "email",
                  message: "This is not valid Email"
                },
                {
                  required: true,
                  message: "Please input your lastname!"
                }
              ]}
            >
              <Input
                className="custom-input "
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="phone"
              className="cuntry_code mb-2"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!"
                }
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: "100%"
                }}
                placeholder="Phone No."
              />
            </Form.Item>
            <Form.Item
              name="password"
              className="mb-2"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!"
                }
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="New Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            <Form.Item
              name="password"
              className="mb-2"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!"
                }
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Confirm Password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" noStyle className="mb-2">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <MainButton htmlType="submit" className="w-100">
                Register
              </MainButton>
              {/* <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button> */}
            </Form.Item>
            <div className="social text-center">
              <SpanText className="sign_with">Or Sign In With</SpanText>
              <div className="social-btn mt-3">
                <SecondaryButton style={{ padding: "4px 8px" }}>
                  children=
                  {
                    <>
                      <RiGoogleFill className="me-1" />
                      Google
                    </>
                  }
                </SecondaryButton>
                <SecondaryButton style={{ padding: "4px 8px" }}>
                  children=
                  {
                    <>
                      <RiFacebookFill className="me-1" />
                      Facebook
                    </>
                  }
                </SecondaryButton>
                <SecondaryButton style={{ padding: "4px 8px" }}>
                  children=
                  {
                    <>
                      <RiAppleFill className="me-1" />
                      Apple
                    </>
                  }
                </SecondaryButton>
              </div>
              <div className="mt-3">
                <SpanText>
                  Already have an account?
                  <Link to="" className="ms-1 " style={{ color: "cadetblue" }}>
                    Sign In
                  </Link>
                </SpanText>
              </div>
            </div>
          </Form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
