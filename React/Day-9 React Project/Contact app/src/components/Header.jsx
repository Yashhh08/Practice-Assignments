import React from "react";
import { Link } from 'react-router-dom';

const Header = ()=>{

    return(
        <div>
            <div>
                <h1>Contact Manager</h1>
            </div>
            <div style={{
                display:"flex",
                justifyContent:"space-evenly"
            }}>
                <Link to={"/contactList"}>Contact List</Link>
                <Link to={"/addContact"}>Add Contact</Link>
            </div>
        </div>
    );

}

export default Header;