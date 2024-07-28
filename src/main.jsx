import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Login from './component/Login.jsx';
import Signup from './component/Signup.jsx';
import Home from './component/Home.jsx';
import ErrorPage from './component/ErrorPage.jsx';
import Payment from './component/Payment.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      { path: "/",
        element:<Home/>,
      },
      { path: "/login",
        element:<Login/>,
      },
      {
      path: "/signup",
      element:<Signup/>,
    },
    {
      path: "/pay",
      element:<Payment/>,
    },
  {
    path: "*",
    element:<ErrorPage/>,
  },
  
  ]
  },
  {
    path: "*",
    element:<ErrorPage/>,
  },   
   
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ToastContainer />

    <RouterProvider router={router} />
    </React.StrictMode>,
)
