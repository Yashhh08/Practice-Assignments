import React from "react";
import { useForm } from "react-hook-form";
import { useState,useContext } from "react";
import axios from "axios";
import { AddContactContext } from "../contexts/AddContactContext";
import { Navigate, useNavigate } from 'react-router-dom';

const AddContact = () => {

    const {toggleAdded} = useContext(AddContactContext);

    const Navigate=useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3001/contacts", data)
      .then((res) => {
        alert("added")
        // console.log(res);
        toggleAdded();
        reset();
        Navigate("/contactList");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            name
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: "name is required" })}
            />
          </label>
          <h5>{errors.name?.message}</h5>

          <label>
            Email
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "email is required" })}
            />
          </label>
          <h5>{errors.email?.message}</h5>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddContact;
