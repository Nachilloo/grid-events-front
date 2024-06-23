import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layout";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Event from "../pages/Event/Event";
import Profile from "../pages/Profile/Profile";
import AllEvents from "../pages/AllEvents/AllEvents";
import NotFound from "../pages/NotFound/NotFound";
import Sign from "../pages/Sign/Sign";
import EditEventPage from "../pages/Event/EditEventPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign",
        loader: () => {
          if (localStorage.getItem("token")) {
            return redirect("/profile");
          } else {
            return null;
          }
        },
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
        path: "/editevent",
        element: <EditEventPage />,
      },
      {
        path: "/events",
        element: <AllEvents />,
      },
      {
        path: "/profile",
        loader: () => {
          if (!localStorage.getItem("token")) {
            alert("inicia sesion");
            return redirect("/sign");
          } else {
            return null;
          }
        },
        element: <Profile />,
      },
    ],
  },
]);

export default router;