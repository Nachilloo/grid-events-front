import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/Signup/signup";
import Home from "../pages/Home/Home";
import Root from "../layout";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;