import React from "react";
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {

    const Navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(true) // if login successful
        {
            Navigate("/");
        }
    }


  return (
    <div>
        <h2>Login</h2>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <label>
          <input type="text" placeholder="Enter email" />
        </label>
        <label>
          <input type="password" placeholder="Enter password" />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
