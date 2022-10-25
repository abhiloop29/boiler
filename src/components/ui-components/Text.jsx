import React from "react";
import PropTypes from "prop-types";
import "./element.scss";

export const HeadingText1 = (props) => {
  const { children, className } = props;
  return (
  <>
  <h1 {...props} className={` heading_text_1 ${className}`}>
    {children}
    </h1>
    </>
  );
};
HeadingText1.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string
};

export const HeadingText2 = (props) => {
  const { className, children } = props;
  return <h2 {...props} className={` heading_text_2 ${className}`}>{children}</h2>;
};
HeadingText2.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
};

export const NormalText = (props) => {
  const { className, children } = props;
  return <p className={`normal_text ${className}`}>{children}</p>;
};
NormalText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
};

export const SmallText = (props) => {
  const { className, children } = props;
  return <div className={`small_text ${className}`}>{children}</div>;
};
SmallText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
};

export const SpanText = (props) => {
  const { className, children } = props;
  return <span className={`span_text ${className}`}>{children}</span>;
};
SpanText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
};
