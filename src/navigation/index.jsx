import App from '../App.jsx'
import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/Error";
import { SignupPage } from '../pages/Signup/index.jsx';
import { LoginPage } from '../pages/Login/index.jsx';
import { FirstStep } from '../pages/Register/FirstStep/index.jsx';
import { SecondStep } from '../pages/Register/SecondStep/index.jsx';

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
        path: "register/1",
        element: <FirstStep/>,
      },
      {
        path: "register/2",
        element: <SecondStep/>,
      },
    ]
  },
]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )