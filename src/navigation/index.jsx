import App from '../App.jsx'
import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/Error";
import { SignupPage } from '../pages/Signup/index.jsx';
import { LoginPage } from '../pages/Login/index.jsx';
import { FirstStep } from '../pages/Register/FirstStep/index.jsx';
import { SecondStep } from '../pages/Register/SecondStep/index.jsx';
import { Home } from '../pages/Home/index.jsx';

export const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignupPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "home",
        element: <Home/>,
      },
    ]
  },
  {
    path: "/register/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "1",
        element: <FirstStep/>,
      },
      {
        path: "2",
        element: <SecondStep/>,
      },
    ]
  },
]);

