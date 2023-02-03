import React from "react";
import { useParams,Navigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const UserDetails = () => {
  const { userId } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${userId}`)
      .then((response) => {
        console.log(response.data.data);
        setUser(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if(false) //if user not logged in
  {
    return(
        <Navigate to={"/login"}/>
    )
  }


  return (
    <div>
      <h2>UserDetails : {userId}</h2>
      <img src={user.avatar} alt="avatar" />
      <h3>
        {user.first_name} {user.last_name}
      </h3>
      <h4>{user.email}</h4>
    </div>
  );
};

export default UserDetails;
