import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/header/Header.js";
import Body from "./components/body/Body.js";
import Footer from "./components/footer/Footer.js";
import Restaurant from "./components/body/Restaurant.js";
import "./index.css";
import AboutUs from "./components/body/AboutUs.js";
import ErrorPage from "./components/utils/ErrorPage.js";

/**
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -Search
 *  -RestaurentCard
 * Footer
 *  -copyRight
 *  -links
 *  -adderess
 *  -contact
 */

const App = () => {
    return (
        <div>
            <div className="headerOffset"></div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,

        children: [
            { path: "/", element: <Body /> },
            { path: "/aboutus", element: <AboutUs /> },
            { path: "/contactus", element: <div>cosnlsdjf</div> },
            { path: "/cart", element: <div>dis is the dart</div> },
            { path: "/restaurant/:resId", element: <Restaurant /> },
        ],
        errorElement: <ErrorPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
