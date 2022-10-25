import React from "react";
import { Form, Input } from "antd";
import "./auth.scss";
import { HeadingText2, NormalText } from "../ui-components/Text";
import { MainButton } from "../ui-components/Button";

const Otp = () => {
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
              OTP Verification
            </HeadingText2>
            <NormalText className="mb-4 text-center">OTP sent</NormalText>

            <Form.Item
              name="Enter OTP"
              rules={[
                {
                  required: true,
                  message: "Please enter OTP"
                }
              ]}
            >
              <Input placeholder="Enter OTP" style={{ padding: "8px 11px" }} />
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

export default Otp;
