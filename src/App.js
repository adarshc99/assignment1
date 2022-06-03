// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Student from './Studentdetails';

function App() {
  const [inputs,setInputs] = useState({
    Fname:"",
    Lname:"",
    Email:"",
    Phone:""
  });
  const [error,showError] = useState("");
  const [setCount,changeCounter] = useState(false)

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => {
      return {
        ...values, [name]: value
      }
    });
  }
  const removeError = () =>
  {
    showError("");
    changeCounter(false);
  }
  function formValid(event)
  {
    event.preventDefault();
    if (inputs.Fname==null || inputs.Fname==="")
    {  
      showError("First Name Can't Be Blank");
      console.log(1);
      return;  
    }
    if (inputs.Lname==null || inputs.Lname==="")
    {  
      showError("Last Name Can't Be Blank");
      return;  
    }
    if(inputs.Email==="")
    {
      showError("Email Can't Be Blank");
      return; 
    }
    let x=inputs.Email;  
    let atposition=x.indexOf("@");  
    let dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
      showError("Enter Valid Email Address");
      return;  
    } 
    if(inputs.Phone === "") 
    {
      showError("Phone Number Can't Be Blank");
      return; 
    }
    if((isNaN(inputs.Phone))){  
      showError("Phone Number can have only numbers");
      return;  
    }
    if((inputs.Phone).length !== 10)
    {
      showError("Enter 10 Digit Phone Number");
      return; 
    }
    changeCounter(true);
  }

  function eraseData()
  {
    setInputs(values => {
      return {
        ...values, Fname:"",Lname:"",Email:"",Phone:""
      }
    });
    changeCounter(false);
  }

  return (
    <div className="container mt-3">
  <h2 className='text-center'>Student Form</h2>
  {setCount === true ?<Student fname={inputs.Fname} lname={inputs.Lname} phone={inputs.Phone} email={inputs.Email}/> :'' }

    <div className="mb-3 mt-3">
      <label htmlFor="First Name">Email:</label>
      <input type="text" className="form-control" placeholder="Enter First Name" name="Fname" value={inputs.Fname} onChange={handleChange} onFocus={removeError} autoComplete="off"/>
    </div>
    <div className="mb-3">
      <label htmlFor="Last Name">Last Name:</label>
      <input type="text" className="form-control" placeholder="Enter Last Name" name="Lname" value={inputs.Lname} onChange={handleChange} onFocus={removeError} autoComplete="off"/>
    </div>
    <div className="mb-3">
      <label htmlFor="Email">Email:</label>
      <input type="Email" className="form-control" placeholder="Enter Email" name="Email" value={inputs.Email} onChange={handleChange} onFocus={removeError} autoComplete="off"/>
    </div>
    <div className="mb-3">
      <label htmlFor="Phone">Phone:</label>
      <input type="text" className="form-control" placeholder="Enter Phone Number" name="Phone" value={inputs.Phone} onChange={handleChange} onFocus={removeError} autoComplete="off"/>
    </div>
    <p className='text-danger'>{error}</p>
    <button className="btn btn-primary" onClick={formValid}>Submit</button>
    <button className="btn btn-primary mx-1" onClick={eraseData}>Erase Current Data</button>
</div>

  );
}

export default App;
