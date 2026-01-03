import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import main from "../config/api";


export const Context = createContext(null);

const ContextProvider = (props) => {

    const [currState, setCurrState] = useState("Sign Up");
    const [openLogin, setOpenLogin] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        image: "",
    });
    const url = "http://localhost:4000"
    const [token, setToken] = useState("");
    const [input, setInput] = useState("");
    const [slide, setSlide] = useState(false);


    const fetchUser = () => {
        const token1 = localStorage.getItem("token");
        if (token1) {
            setToken(token1)
        }
    }

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
    }

    useEffect(() => {
        fetchUser();
        main();
    }, [])

    const contextValue = {
        currState,
        setCurrState,
        openLogin,
        setOpenLogin,
        data,
        setData,
        url,
        token,
        setToken,
        logout,
        input,
        setInput,
        slide,
        setSlide,
    }





    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;