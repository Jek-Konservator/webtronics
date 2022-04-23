import React, { useEffect, useCallback } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { Registration } from "./components/registration";
import { Main } from "./components/main";
import { Login } from "./components/login";
import { RegisterVerify } from "./components/registration/registerVerify";
import { useSelector } from "react-redux";
export const App = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const { refresh, access } = useSelector(
    ({ mainReducer }: any) => mainReducer
  );

  const checkAccessPage = useCallback(() => {
    if (refresh || access) {
    } else if (
      location.pathname !== "/login" &&
      location.pathname !== "/registration"
    ) {
      navigate(`/login`);
    }
  }, [refresh, access, location, navigate]);

  useEffect(() => {
    checkAccessPage();
  }, [checkAccessPage]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-verify" element={<RegisterVerify />} />
      </Routes>
    </div>
  );
};
