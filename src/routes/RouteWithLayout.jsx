import React from "react";
import { Route } from "react-router-dom";

const RouteWithLayout = (props) => {
  // eslint-disable-next-line react/prop-types
  const { layout: Layout, component: Component, ...rest } = props;
  return (
    <>
      <Route
        {...rest}
        render={(matchProps) => (
          <Layout>
            <Component
              {...matchProps}
              // eslint-disable-next-line react/prop-types
              setIsAuthenticated={props.setIsAuthenticated}
            />
          </Layout>
        )}
      />
    </>
  );
};

export default RouteWithLayout;
