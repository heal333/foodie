import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/header/Header.js";
import Body from "./components/body/Body.js";
import Footer from "./components/footer/Footer.js";
import "./index.css";

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
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
