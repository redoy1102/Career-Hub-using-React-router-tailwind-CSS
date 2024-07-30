import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Component/Root/Root.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import './index.css'
import Home from "./Component/Home/Home.jsx";
import Statistics from "./Component/Statistics/Statistics.jsx";
import Blog from "./Component/Blog/Blog.jsx";
import AppliedJobs from "./Component/AppliedJobs/AppliedJobs.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
            },
            {
                path: "/blogs",
                element: <Blog></Blog>,
            },
            {
                path: "/appliedjobs",
                element: <AppliedJobs></AppliedJobs>
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
