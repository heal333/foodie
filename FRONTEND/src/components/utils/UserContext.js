import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "guest",
});

export default UserContext;
