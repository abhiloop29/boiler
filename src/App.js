import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/landingpage/Home";
// import Routes from "./routes/index";
// import useAuthContext from "./utils/AuthContext";
import "../src/assets/bootstrap.css";
import "../src/assets/global.scss";

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
      </Routes>
    </>
  );
};
export default App;
