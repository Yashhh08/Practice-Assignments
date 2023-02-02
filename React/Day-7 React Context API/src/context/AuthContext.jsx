import React, { createContext,useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({children})=>{

    const [auth,setAuth] = useState(false);

    const toggleAuth = ()=>{
        setAuth(!auth);
    }

    return(
        <AuthContext.Provider value={{auth,toggleAuth}}>{children}</AuthContext.Provider>
    )

}

export {AuthContext,AuthContextProvider};
