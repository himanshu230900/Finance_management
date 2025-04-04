import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../modules/home/pages/Home";
import { Protected } from "../modules/auth/components";
import Login from "../modules/auth/pages/login";
import SignUp from "../modules/auth/pages/signUp";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/login',
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        )
      },
      {
        path: '/signup',
        element: (
          <Protected authentication={false}>
            <SignUp />
          </Protected>
        )
      }
    ]
  }
]);

const Router = () => <RouterProvider router={router} />;
export default Router;
