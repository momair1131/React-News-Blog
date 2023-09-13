import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import FetchData from "./components/FetchData/FetchData.jsx";

const router = createBrowserRouter([
  {
    path: "/React-News-Blog/",
    element: <App />,
    children: [
      {
        path: "/React-News-Blog/",
        element: <Home />,
      },
      {
        path: "/React-News-Blog/science",
        element: <FetchData cat="science" />,
      },
      {
        path: "/React-News-Blog/sports",
        element: <FetchData cat="sports" />,
      },
      {
        path: "/React-News-Blog/technology",
        element: <FetchData cat="technology" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
