import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.scss";

const Landing = lazy(() => import('./pages/Landing/Landing'));
const Register = lazy(() => import('./pages/Register/Register.jsx'));
const Login = lazy(() => import('./pages/Login/Login'))
const Home = lazy(() => import('./pages/Home/Home'))
const Auth = lazy(() => import('./pages/Auth/Auth'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
      {
        path: "/home",
        element: <Auth />,
        children: [
          {
            path: "/home",
            element: <Home />,
          },
        ],
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: '/home',
    element: <Home/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<p>...Loading</p>}>
    <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
