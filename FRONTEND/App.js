import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/header/Header";
import Body from "./components/body/Body";
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
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
