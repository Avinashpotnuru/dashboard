import { Box } from "@mui/material";
import {  Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Settings from "../pages/Settings";

const MainBody = () => (
  <Box component="main" sx={{ flexGrow: 1, pt: "60px" }}>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </Box>
);

export default MainBody;
