import React from "react";
import { Image } from "antd";
import PropTypes from "prop-types";

export const Img = (props) => {
  const { alt, className, children } = props;
  return (
    <>
      <Image
        preview={false}
        src={children}
        className={`w-100 ${className}`}
        alt={alt}
        {...props}
      />
    </>
  );
};
Img.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string
};
