import React from "react";
import { Form } from "antd";
import PropTypes from "prop-types";

export const FormBase = (props) => {
  const { className } = props;
  const layoutChange = "vertical";
  return (
    <>
      <Form
        scrollToFirstError={true}
        layout={layoutChange}
        className={`${className}`}
        requiredMark={false}
        {...props}
      ></Form>
    </>
  );
};
FormBase.propTypes = {
  className: PropTypes.string
};
