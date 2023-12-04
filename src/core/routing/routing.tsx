import { createBrowserRouter } from "react-router-dom";
import Home from "../../home/home.tsx";
import Details from "../../details/details.tsx";
import AddUser from "/home/sania/React Assignment/hrm-app/src/add user/add-user.tsx";
import EditUser from "/home/sania/React Assignment/hrm-app/src/edit user/edit-user.tsx";
import ErrorPage from "../../error/error.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/details/:id",
    element: <Details></Details>,
  },
  {
    path: "/add",
    element: <AddUser></AddUser>,
  },
  {
    path: "/edit/:id",
    element: <EditUser></EditUser>,
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
