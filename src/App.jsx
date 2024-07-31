import { Box } from "@mui/material";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import AppMainBar from "./Components/AppBar";
import MainBody from "./Components/MainBody";
import SideBar from "./Components/SideBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route
          path="*"
          element={
            <Box sx={{ display: "flex" }}>
              <AppMainBar />
              <SideBar />
              <Box component="main" sx={{ flexGrow: 1, pt: "60px" }}>
                <Routes>
                  <Route path="/" element={<MainBody />}>
                    <Route index element={<Navigate to="/home" />} />
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="settings" element={<Settings />} />
                  </Route>
                </Routes>
              </Box>
            </Box>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
