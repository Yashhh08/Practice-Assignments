import React from "react";
import { useState } from "react";
import axios from "axios";

const EmpForm = (props) => {
  
  const [employeeData,setData] = useState({
    name:"",
    age:0,
    address:"",
    department:"",
    salary:0,
    married:false
  })  

  const [married, setMarried] = useState(false);

  const handleMarriedStatus = (e) => {
    setMarried(e.target.checked);

    setData({...employeeData,[e.target.id]:e.target.checked})

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(employeeData);

    axios.post("http://localhost:3001/employees",employeeData).then(()=>{
        alert("Employee data saved");

    props.updated();

    setData({
        name:"",
        age:0,
        address:"",
        department:"",
        salary:0,
        married:false
    })

    })

  };

  const handleChange = (e) => {

    const id = e.target.id;
    const value = e.target.value;

    // console.log(id,value);

    setData({...employeeData,[id]:value});

  };

  return (
    <div>
      <h1>Employee Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          value={employeeData.name}
          placeholder="Enter name"
          onChange={handleChange}
        />
        <br />
        <input type="number" id="age" value={employeeData.age} placeholder="Enter age" onChange={handleChange}/>
        <br />
        <input type="text" id="address" value={employeeData.address} placeholder="Enter address" onChange={handleChange}/>
        <br />
        <select id="department" value={employeeData.department} onChange={handleChange}>
          <option value="">select department</option>
          <option value="IT">IT</option>
          <option value="Sales">Sales</option>
          <option value="HR">HR</option>
        </select>
        <br />
        <input type="number" id="salary" value={employeeData.salary} placeholder="Enter salary" onChange={handleChange}/>
        <br />

        <label>
          Married
          <input
            type="checkbox"
            id="married"
            checked={employeeData.married}
            onChange={handleMarriedStatus}
          />
        </label>

        <br />

        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default EmpForm;
