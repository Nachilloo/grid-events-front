import { createBrowserRouter } from "react-router-dom";
import Sign from "../pages/Sign/sign";
import Home from "../pages/Home/Home";
import Root from "../layout";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Event from "../pages/Event/Event";
import Profile from "../pages/Profile/Profile";
import AllEvents from "../pages/AllEvents/AllEvents";


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
        path: "/sign",
        element: <Sign />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/events",
        element: <AllEvents />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;