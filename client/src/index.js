import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import Finded from "./routes/finded";
import Search from "./routes/search";
import checkData from "./functions/findData";
import NotFoundPage from "./routes/notFound";
import './css/index.css'
import NotFinded from "./routes/notFinded";
// import Home from "./routes/home";
import App from "./App";
import About from "./routes/about";
import ImageFileUpload from "./components/ImageFileUpload";
import Admin from "./routes/admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: "/",
        element: <Search />,
      },
      {
        path: ":phone",
        element: <Finded />,
        errorElement: <NotFoundPage/>,
        loader: async ({ params }) => {
        return checkData(params.phone)
        },
      },
      {
        path: ':phone/:card/confirmation',
        element: <ImageFileUpload/>,
        loader: async ({params}) => {
          const data = {}
          data.phone = params.phone
          data.card = params.card
        return data
        }
      },
      {
        path: "/notFinded",
        element: <NotFinded/>
      },
      {
        path: "/how",
        element: <About/>
      },
      {
        path: "*",
        element: <NotFoundPage/>
      }
    ]
  },
  {
    path: "admin",
    element: <Admin />
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);