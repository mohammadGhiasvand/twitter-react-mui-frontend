/* eslint-disable no-constant-condition */
import { Routes, Route, useNavigate } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";

import Home from "./components/HomePage/Home";
import Authentication from "./components/Authentication/Authentication";
import { useThemeContext } from "./components/Theme/ThemeContextProvider";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "./store/Auth/Action";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { theme } = useThemeContext();

  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    if (jwt) {
      dispatch(getUserProfile(jwt));
      navigate("/");
    }
  }, [auth.jwt, dispatch, jwt]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/*" element={auth.user ? <Home /> : <Authentication />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
