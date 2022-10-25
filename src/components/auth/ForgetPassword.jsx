import React from "react";
import { MailOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import "./auth.scss";
import { HeadingText2, NormalText } from "../ui-components/Text";
import { MainButton } from "../ui-components/Button";

const ForgetPassword = () => {
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
            <HeadingText2 className="mb-2 text-center">
              Forget Password
            </HeadingText2>
            <NormalText className="mb-4 text-center">
              Hey, Enter your Registered email,to get OTP
            </NormalText>

            <Form.Item
              name="email"
              className="mb-2"
              rules={[
                {
                  type: "email",
                  message: "This is not valid Email"
                },
                {
                  required: true
                  // message: 'Please input your lastname!',
                }
                // {
                //     pattern: emailRegex,
                //     message: "this is not valid email"
                // }
              ]}
            >
              <Input
                className="custom-input "
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Registered Email"
              />
            </Form.Item>
            <Form.Item className="mt-4">
              <MainButton htmlType="submit" className="w-100">
                Submit
              </MainButton>
              {/* <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button> */}
            </Form.Item>
          </Form>
        </div>
      </section>
    </>
  );
};

export default ForgetPassword;
