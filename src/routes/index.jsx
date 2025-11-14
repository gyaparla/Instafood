import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import AppLayout from "../layouts/AppLayout";
import NotFound from "../components/NotFound";
import RestaurantDetails from "../components/RestaurantDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
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
        path: "restaurants/menu/:resId",
        element: <RestaurantDetails />,
      },
    ],
  },
  // {
  //   path: "/not-found",
  //   element: <NotFound />,
  // },
  // {
  //   path: "*",
  //   element: <Navigate to={"/not-found"} />,
  // },
]);

export default routes;
