import { Box } from "@mui/material";
import "./App.css";

import AppMainBar from "./Components/AppBar";
import MainBody from "./Components/MainBody";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppMainBar />
      <SideBar />
      <MainBody />
    </Box>
  );
}

export default App;
