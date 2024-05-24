import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import Finded from "./routes/finded";
import Search from "./routes/search";
import checkData from "./functions/checkData";
import NotFoundPage from "./routes/notFound";
import './css/index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />,
  },
  {
        path: "/finded/:phone",
        element: <Finded />,
        errorElement: <NotFoundPage/>,
        loader: async ({ params }) => {
          return checkData(params.phone)
        },
  },
  {
    path: "*",
    element: <NotFoundPage/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);