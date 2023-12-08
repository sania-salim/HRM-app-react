import { createBrowserRouter } from "react-router-dom";
import Home from "../../home/home.tsx";
import Details from "../../details/details.tsx";
import AddUser from "../../add user/add-user.tsx";
import EditUser from "../../edit user/edit-user.tsx";
import ErrorPage from "../../error/error.tsx";
import PageNotFound from "../../error/notfound.tsx";

const router = createBrowserRouter([
  {
    path: "",
    // element:,
    children: [
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
        element: <PageNotFound></PageNotFound>,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
