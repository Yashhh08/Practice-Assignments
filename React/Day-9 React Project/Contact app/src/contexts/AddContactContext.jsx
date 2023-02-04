import React, { Children } from "react";
import { createContext,useState } from "react";

const AddContactContext = createContext();

const AddContactContextProvider = ({ children }) => {

    const [added,setAdded] = useState(false);

    const toggleAdded = ()=>{
        setAdded(!added)
    }

  return <AddContactContext.Provider value={{added,toggleAdded}}>{children}</AddContactContext.Provider>;
};

export {AddContactContext,AddContactContextProvider};