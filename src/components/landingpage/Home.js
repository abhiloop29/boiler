import { Button, Form, Input } from "antd";
import React from "react";
import { emailRegex } from "../../utils/Constants";
import FormBase from "../ui-components/Form";
import { Loader } from "../utilities/Loader";
import "../../assets/scss-components/radio.scss";
import "../../assets/scss-components/checkbox.scss";
import "../../assets/scss-components/input.scss";
import { galaxy } from "../../utils/ImagePath";
import {
  MainButton,
  SecondaryButton,
  LinkButton,
} from "../ui-components/Button";
import { Img } from "../ui-components/Image";
import {
  HeadingText2,
  HeadingText1,
  NormalText,
  SpanText,
  SmallText,
} from "../ui-components/Text";

const Home = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Loader loaderSize="80px" />

      <FormBase
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
            {
              pattern: emailRegex,
              message: "asdsad",
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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </FormBase>
      <Button>Check</Button>
      <h1>Hello Start</h1>
      <div className="jeetu">
        <h1>Lets Start</h1>
      </div>

      <Input placeholder="Basic usage" />
      <Img children={galaxy} alt="galaxy_image" />
      <MainButton children="About Us" className="ms-5" />
      <SecondaryButton children="Secondary" className="ms-5" />
      <LinkButton children="Read More" className="ms-5" />
      <HeadingText1 children="Lets Go !" />
      <HeadingText2 children="Lets Go !" />
      <NormalText children="start is begining" />
      <SpanText children="start is begining" />
      <SpanText children="start is begining" />
      <SmallText children="start is begining" />
    </>
  );
};

export default Home;
