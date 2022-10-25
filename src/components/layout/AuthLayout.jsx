import React, { useState } from "react";
import { Button, Card, Form, Input, Layout } from "antd";
import HeaderLayout from "./Header";
import Sidebar from "./Sidebar";

const { Content } = Layout;

const AuthLayout = (props) => {
  const [value, setValue] = useState("");

  const allowsNumbers = (event) => {
    const result = event.target.value.replace(/\D/g, "");
    setValue(result);
    console.log(result);
  };
  const allowsAlphabet = (event) => {
    const result = event.target.value.replace(/[^a-z ]/gi, "");
    setValue(result);
    console.log(result);
  };

  return (
    <Layout>
      <Sidebar />
      <Layout className="site-layout">
        <HeaderLayout />
        <Content style={{ margin: " 24px 24px" }}>
          <Card>
            <Form
              layout="vertical"
              name="basic"
              scrollToFirstError
              initialValues={{ remember: true }}
              autoComplete="off"
            >
              <Form.Item
                name="email"
                label="email"
                rules={[
                  { type: "email", message: "Invalid Email" },
                  { required: true, min: 8, message: "Please enter value" }
                ]}
              >
                <Input
                  allowClear
                  placeholder=""
                  suffix="%"
                  prefix="%"
                  maxLength={45}
                />
              </Form.Item>
              <Form.Item
                name="number"
                label="number"
                rules={[{ required: true, message: "Please enter value" },
                  { type: "number", message: "aasdas" }]}
              >
                <Input
                  allowClear
                  placeholder=""
                  suffix="a"
                  prefix="b"
                  maxLength={20}
                  style={{ width: "550px" }}
                  value={value}
                  onChange={allowsNumbers}
                />
              </Form.Item>

                <Form.Item
                name="name"
                label="name"
                rules={[
                  { required: true, whitespace: true, message: "Invalid name" }
                ]}>
                  <Input
                  placeholder=""
                  maxLength={15}
                  allowClear
                  onChange={allowsAlphabet}
                  />
                </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" }
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};
export default AuthLayout;
