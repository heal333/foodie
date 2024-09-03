"use strict";

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/header/Header.js";
import Body from "./components/body/body.js";
import Footer from "./components/footer/Footer.js";
import Restaurant from "./components/body/Restaurant.js";
import AboutUs from "./components/body/AboutUs.js";
import ErrorPage from "./components/utils/ErrorPage.js";
import "./index.css";
import CartContextProvider from "./components/utils/CartContextProvider.js";
import Cart from "./components/cart/Cart.js";
import Login from "./components/login/LoginPage.js";
import SignupPage from "./components/login/SignupPage.js";

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
    // const [context, setContext] = useState("default");
    // console.log(context);
    return (
        <CartContextProvider>
            <div className="headerOffset"></div>
            <Header />
            <Outlet className="fullBody" />
            <Footer />
        </CartContextProvider>
        // <UserContext.Provider value={{ data: context, changeData: setContext }}>

        // </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/foodie",
        element: <App />,

        children: [
            { path: "/foodie", element: <Body /> },
            { path: "/foodie/aboutus", element: <AboutUs /> },
            { path: "/foodie/login", element: <Login /> },
            { path: "/foodie/signup", element: <SignupPage /> },
            { path: "/foodie/cart", element: <Cart /> },
            { path: "/foodie/restaurant/:resId", element: <Restaurant /> },
        ],
        errorElement: <ErrorPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
