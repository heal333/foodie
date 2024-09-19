import { API } from "./const";

const getAutoLogin = async (user, token) => {
    if (!user || !token) {
        return false;
    }
    const response = await fetch(`${API}/auth/autologin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            user: user,
            token: token,
        }),
    });
    if (!response.ok) {
        return false;
    }
    const result = await response.json();
    // console.log(result);
    return result;
};

export default getAutoLogin;
