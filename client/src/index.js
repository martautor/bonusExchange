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
import NotFinded from "./routes/notFinded";
import Home from "./routes/home";
import App from "./App";
import About from "./routes/about";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: "/",
        element: <Home />,
      },
      {
        path: "/card",
        element: <Search />,
      },
      {
        path: "/card/:phone",
        element: <Finded />,
        errorElement: <NotFoundPage/>,
        loader: async ({ params }) => {
        return checkData(params.phone)
        },
      },
      {
        path: "/card/notFinded",
        element: <NotFinded/>
      },
      {
        path: "/card/how",
        element: <About/>
      },
    ]
  },
  {
    path: "*",
    element: <NotFoundPage/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);