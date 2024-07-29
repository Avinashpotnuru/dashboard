import { Box } from "@mui/material";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Hello World</h1>
    <Link to="/about">About Us</Link>
  </div>
);

const About = () => (
  <div>
    <h1>About Us</h1>
    <Link to="/">Home</Link>
  </div>
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

const MainBody = () => (
  <Box component="main" sx={{ flexGrow: 1, pt: "60px" }}>
    <RouterProvider router={router} />
  </Box>
);

export default MainBody;
