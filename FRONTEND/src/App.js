"use strict";

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    Link,
    redirect,
} from "react-router-dom";

import Header from "./components/header/Header.js";
import Body from "./components/body/body.js";
import Footer from "./components/footer/Footer.js";
import Restaurant from "./components/restaurantPage/Restaurant.js";
import AboutUs from "./components/body/AboutUs.js";
import ErrorPage from "./components/utils/ErrorPage.js";
import "./index.css";
import CartContextProvider from "./components/utils/CartContextProvider.js";
import Cart from "./components/cart/Cart.js";
import Login from "./components/login/LoginPage.js";
import SignupPage from "./components/login/SignupPage.js";
import { authLoader } from "./components/utils/authLoader.js";
import Account from "./components/user/Account.js";
import { Provider } from "react-redux";
import appStore from "./components/utils/redux/appStore.js";

/**
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -Search
 *  -RestaurentCard
 * Login
 *  -login
 *  -signup
 *  -account
 * Cart
 *  -order
 *  -cart
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
        <Provider store={appStore}>
            <CartContextProvider>
                <div className="headerOffset"></div>
                <Header />
                <Outlet className="fullBody" />
                <Footer />
            </CartContextProvider>
        </Provider>
        // <UserContext.Provider value={{ data: context, changeData: setContext }}>

        // </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,

        children: [
            { path: "/", element: <Link to="/foodie">go to home page</Link> },
            { path: "/foodie", element: <Body /> },
            { path: "/foodie/aboutus", element: <AboutUs /> },
            {
                path: "/foodie/login",
                element: <Login />,
                loader: () => {
                    return authLoader(<Login />);
                },
            },
            {
                path: "/foodie/signup",
                element: <SignupPage />,
                loader: () => {
                    return authLoader(<SignupPage />);
                },
            },
            { path: "/foodie/cart", element: <Cart /> },
            { path: "/foodie/restaurant/:resId", element: <Restaurant /> },
            { path: "/foodie/user/:userId", element: <Account /> },
        ],
        errorElement: <ErrorPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
