import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./Layouts/RootLayout.jsx";
import Home from "./Pages/Home.jsx";
import AddHabits from "./Pages/Habits/AddHabits.jsx";
import MyHabits from "./Pages/Habits/MyHabits.jsx";
import BrowsHabits from "./Pages/Habits/BrowsHabits.jsx";
import Error from "./Components/Error/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <Navigate to={"/home"}></Navigate>,
      },
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/add-habit",
        element: <AddHabits></AddHabits>,
      },
      {
        path: "my-habits",
        element: <MyHabits></MyHabits>,
      },
      {
        path: "brows-public-habits",
        element: <BrowsHabits></BrowsHabits>,
      },
      
    ],
  },
  {
    path: "/*",
    element: <Error></Error>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
