import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

const AppLayout = lazy(() => import("../layouts/AppLayout"));
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const RestaurantDetails = lazy(() => import("../components/RestaurantDetails"));
const NotFound = lazy(() => import("../components/NotFound"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<center>Loading...</center>}>
        <AppLayout />
      </Suspense>
    ),
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
