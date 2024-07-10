import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
import './app.css';

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        }
    ])


    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

root.render(<App />);