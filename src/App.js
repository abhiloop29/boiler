import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/landingpage/Home";
// import Routes from "./routes/index";
// import useAuthContext from "./utils/AuthContext";
import "../src/assets/bootstrap.css";
import "../src/assets/global.scss";
import Login from "./components/auth/Login";

const App = () => {
  // const { state } = useAuthContext();
  return (
    <>
      {/* <Router>
        <Routes
          isAuthenticated={state.isAuthenticated}
          userType={state.userType}
        />
      </Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
export default App;
