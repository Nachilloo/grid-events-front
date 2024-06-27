import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layout";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Profile from "../pages/Profile/Profile";
import AllEvents from "../pages/AllEvents/AllEvents";
import NotFound from "../pages/NotFound/NotFound";
import Sign from "../pages/Sign/Sign";
import CreateEvent from "../pages/CreateEvent/CreateEvent";
import EditEventPage from "../pages/Event/EditEventPage"
import EventDetailPage from "../pages/Event/EventDetailPage";
import GatewayPayment from "../components/GatewayPayment";
import EditProfile from "../pages/Profile/EditProfile";

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
        path: "/editevent/:eventId",
        element: <EditEventPage />,
      },
      {
        path: "/events",
        element: <AllEvents />,
      },
      {
        path: "/event/:eventId",
        element: <EventDetailPage />,
      },
      {
        path: "/payment",
        element: <GatewayPayment />,
      },
      {
        path: "/create",
        loader: () => {
          if (!localStorage.getItem("token")) {
            alert("inicia sesion");
            return redirect("/sign");
          } else {
            return null;
          }
        },
        element: <CreateEvent />,
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
      {
        path: "/editprofile",
        element: <EditProfile />,
      },
    ],
  },
]);

export default router;