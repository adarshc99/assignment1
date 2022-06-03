import React from 'react';

function Student(props)
{console.log(props);
    return <>
    
    <table className="table">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Phone Number</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{props.fname}</td>
        <td>{props.lname}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
      </tr>
     
    </tbody>
  </table>
    
    </>
}
export default Student;
