import React from "react";
import {
  LockOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined
} from "@ant-design/icons";
import { Form, Input } from "antd";
import "./auth.scss";
import { HeadingText2, NormalText } from "../ui-components/Text";
import { MainButton } from "../ui-components/Button";

const CreatePassword = () => {
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
              Create Password
            </HeadingText2>
            <NormalText className="mb-4 text-center">
              children=Hey, Create your New Password
            </NormalText>

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

export default CreatePassword;
