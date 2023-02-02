import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = ()=>{

    const {auth,toggleAuth} = useContext(AuthContext);

    return(
        <div>
            <button onClick={()=>{toggleAuth()}}>{auth ? "Logout":"LogIn"}</button>
        </div>
    )

}

export default Navbar;