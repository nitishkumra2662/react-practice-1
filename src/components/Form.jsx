 import React, { useState } from "react";
 
 const Form = () => {
   const [name, setName] = useState('');
   const [password, setPassword] = useState('');
   const [email, setEmail] = useState('');
   
   return (
     <div>
       <h1>Controlled Form</h1>
       <form action="" method="get">
           <input type="text"  value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name" />
            <br/> <br/>
          <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" />
            <br/> <br/>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter email" />
            <br/> <br/>
           <button>Submit</button>
           <button onClick={()=>{setName(''),setEmail(''), setPassword('')}}>Clear</button>
       </form>
       <h3>{name}</h3>
       <h3>{password}</h3>
       <h3>{email}</h3>
     </div>
   );
 };
 
 export default Form;
 