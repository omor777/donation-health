import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import CardDetails from "../pages/CardDetails/CardDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/card-details/:id",
        element: <CardDetails />,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

export default routes;
