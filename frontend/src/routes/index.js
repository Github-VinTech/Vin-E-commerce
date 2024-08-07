import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import App from '../App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path : "login",
        element: <Login />
      },
      {
        path : "forgot-password",
        element: <ForgotPassword />
      },
      {
        path : "sign-up",
        element: <SignUp />
      },
    ]
  }
]);

export default router;
