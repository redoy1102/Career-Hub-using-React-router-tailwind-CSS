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
import JobDetails from "./Component/JobDetails/JobDetails.jsx";
import {HelmetProvider} from "react-helmet-async";

export const paths = ["/", "/statistics", "/blogs"]
// eslint-disable-next-line react/jsx-key
const elements = [<Home></Home>, <Statistics></Statistics>, <Blog></Blog>]

const router = createBrowserRouter([
    {
        path: paths[0],
        element: <Root></Root>,
        // errorElement: <ErrorPage />,
        children: [
            ...paths.map((path, index) => ({
                path: path,
                element: elements[index]
            })),
            {
                path: "/job/:id",
                element: <JobDetails></JobDetails>,
                loader: () => fetch('../jobs.json')
            },
            {
                path: "/appliedjobs",
                element: <AppliedJobs></AppliedJobs>,
                loader: () => fetch('../jobs.json')
            }
        ],
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <HelmetProvider>
          <RouterProvider router={router} />
      </HelmetProvider>
  </React.StrictMode>,
)
