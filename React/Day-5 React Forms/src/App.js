import logo from './logo.svg';
import './App.css';
import EmpForm from './components/EmpForm';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import ShowEmpData from './components/ShowEmpData';

function App() {

  const [employees,setEmployees] = useState([]);

  const [updateForm,setUpdateForm] = useState(false);

  const handleUpdate = ()=>{
    setUpdateForm(!updateForm);
  }

  useEffect(()=>{
    
    console.log("useEffect")

    axios.get("http://localhost:3001/employees").then((res)=>{
      console.log(res.data);
      setEmployees(res.data);
    })

  },[updateForm])

  return (
    <div className="App">

    <EmpForm updated={handleUpdate}/>

    <ShowEmpData empData={employees}/>

    </div>
  );
}

export default App;
