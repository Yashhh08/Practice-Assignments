import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((Response) => {
      //   console.log(Response);
      setUsers([...Response.data.data]);
    });
  }, []);

  return (
    <div>
      <h1>Users List</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {users.map((user) => {
          return (
            <Link to={`/users/${user.id}`} key={user.id}>
              {user.id}. {user.first_name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
