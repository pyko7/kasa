import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About/About";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Housing from "../pages/Housing/Housing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/housing/:id",
    element: <Housing />,
  },
]);
