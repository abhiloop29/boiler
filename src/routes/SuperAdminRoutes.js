import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/landingpage/Home";

const SuperAdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default SuperAdminRoutes;
