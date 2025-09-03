import React, { useState } from "react";

const Congratulations = () => {
  const [user, setUser] = useState({
    name: "Mohan",
    age: 23,
    address:{
      city:"Delhi",
      country:"India"
    }
  });
  const [data, setData] = useState(['anil','sahil','karan']);
  const handelName=(val)=>{
    user.name=val
setUser({...user})
  }
  const handelCity=(city)=>{
    user.address.city=city
setUser({...user,address:{...user.address,city}})
  }
  const handelUser=(name)=>{
    data[data.length-1]=name;
setData([...data]);
  }
  return (
    <div>
      <h1>Good job!</h1>
      <input type="text" placeholder="update name" onChange={(e)=>handelName(e.target.value)}></input>
      <br/>
      <input type="text" placeholder="update city" onChange={(e)=>handelCity(e.target.value)}></input>
      <h2>Name :{user.name}</h2>
      <h2>Age :{user.age}</h2>
      <h2>City :{user.address.city}</h2>
      <input type="text" placeholder="enter last name" onChange={(e)=>handelUser(e.target.value)}></input>
      
      {
        data.map((item,index)=>(
         <h3 key={index}>{item}</h3>
        ))
      }
    </div>
  );
};

export default Congratulations;
