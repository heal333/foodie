import { redirect } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContextProvider";
import getAutoLogin from "./getAutoLogin";

export const authLoader = async (compo) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("user");
    const userData = await getAutoLogin(userId, token);

    if (!userData) {
        return compo;
    }

    return redirect(`/foodie/user/${userData.user}`);
};
