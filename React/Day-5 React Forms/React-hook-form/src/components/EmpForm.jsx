import React from "react";
import { useForm } from "react-hook-form";
import "./EmpForm.css";
import axios from "axios";
// import { axios } from 'axios';

const EmpForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    
    console.log(data);

    axios.post("http://localhost:3301/employees",data).then(()=>{
      alert("data stored");
    })

    reset();

  };

  console.log(errors);

  return (
    <div>
      <h1>Employee Form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Name
            <br />
            <input
              type="text"
              // name="name"
              placeholder="Enter name"
              {...register("name", { required: "name is required" })}
            />
          </label>
          <h5>{errors.name?.message}</h5>
        </div>

        <div>
          <label>
            Age
            <br />
            <input
              type="number"
              // name="age"
              placeholder="Enter age"
              {...register("age", {
                required: "age is required",
                min: { value: 18, message: "min age is 18" },
              })}
            />
          </label>
          <h5>{errors.age?.message}</h5>
        </div>

        <div>
          <label>
            Address
            <br />
            <input
              type="text"
              // name="address"
              placeholder="Enter address"
              {...register("address", { required: "address is required" })}
            />
          </label>
          <h5>{errors.address?.message}</h5>
        </div>

        <div>
          <label>
            Salary
            <br />
            <input
              type="number"
              // name="salary"
              placeholder="Enter salary"
              {...register("salary", { required: "salary is required" })}
            />
          </label>
          <h5>{errors.salary?.message}</h5>
        </div>

        <div>
          <label>
            Department
            <br />
            <select
              {...register("department", { required: "select department" })}
            >
              <option value="">Select Department</option>
              <option value="IT">IT</option>
              <option value="Sales">Sales</option>
              <option value="HR">HR</option>
            </select>
            <h5>{errors.department?.message}</h5>
          </label>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default EmpForm;
