import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const MainBody = () => (
  <Box component="main" sx={{ flexGrow: 1}}>
    <Outlet />
  </Box>
);

export default MainBody;
