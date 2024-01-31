import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../components/Login/Login";
import Home from "../pages/Home/Home";
import ShowDetails from "../pages/ShowDetails/ShowDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement:
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "details/:id",
        element: <ShowDetails></ShowDetails>,
      },
    ],
  },
]);

export default router;
