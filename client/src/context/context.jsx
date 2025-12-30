import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";


export const Context = createContext(null);

const ContextProvider = (props) => {

    const [currState, setCurrState] = useState("Sign Up");
    const [openLogin, setOpenLogin] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        image: "",
    });
    const [user, setUser] = useState("");
    const url = "http://localhost:4000"
    const [token, setToken] = useState("");

    const responseMessage = (response) => {
        const user = jwtDecode(response.credential)
        setUser(user);
    }

    const errorMessage = (error) => {
        console.log(error);
    }

    const contextValue = {
        currState,
        setCurrState,
        openLogin,
        setOpenLogin,
        data,
        setData,
        errorMessage,
        responseMessage,
        user,
        url,
        token,
        setToken,
    }





    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;