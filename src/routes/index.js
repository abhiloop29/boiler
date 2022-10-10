import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import Loader from "../components/utilities/Loader";
import AdminRoutes from "./AdminRoutes";
import SuperAdminRoutes from "./SuperAdminRoutes";
import UserRoutes from "./UserRoutes";

const index = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Route path="/" element={UserRoutes} />
      {/* <Route path="/" element={SuperAdminRoutes} />
      <Route path="/" element={AdminRoutes} /> */}
    </Suspense>
  );
};

export default index;
