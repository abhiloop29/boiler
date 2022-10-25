import React from "react";
import { Alert } from "antd";

const Alerts = (props) => {
  return (
    <Alert
      // eslint-disable-next-line react/prop-types
      description={props.description}
      // closable
      {...props}
    />
  );
};

export default Alerts;
