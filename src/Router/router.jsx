import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import CaseDetails from "../Pages/CaseDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "case/:id",
        element: <CaseDetails />,
      },
    ],
  },
]);

export default router;
