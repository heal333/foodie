import { useState } from "react";
import moon from "../../plugs/moon.png";
import sun from "../../plugs/sun.png";

const ThemeButton = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    const switchThemeHandler = () => {
        if (darkTheme) {
            root.style.cssText =
                "--headerBackground: white; --bodyBackground: rgb(230, 230, 230); --cardBackground: white; --textColor: black; --softTextColor: rgb(80,80,80); --theme: rgb(0, 212, 0); background-color: var(--bodyBackground); --shadowColor: gray;";
        } else {
            root.style.cssText =
                "--headerBackground: rgb(50,50,50); --bodyBackground: black; --cardBackground: rgb(50,50,50); --textColor: white; --softTextColor: rgb(200,200,200); --theme: rgb(0, 212, 0); background-color: var(--bodyBackground); --shadowColor: rgba(0,212,0,.5);";
        }
        setDarkTheme(!darkTheme);
    };
    let root = document.getElementById("root");

    return (
        <img
            src={darkTheme ? moon : sun}
            className="switchTheme"
            onClick={switchThemeHandler}
        ></img>
    );
};

export default ThemeButton;
