 import React, { useState } from "react";

 
 const UncontrolledForm = () => {
   
   const handelSubmit=(event)=>{
    event.preventDefault();
const user=document.querySelector('#user').value;
const password=document.querySelector('#password').value;

   }
   return (
     <div>
       <h1>Uncontrolled Form</h1>
       <form action="" method="post" onSubmit={handelSubmit}>
           <input type="text"  id="user"  placeholder="Enter name" />
            <br/> <br/>
          <input type="text" id="password"  placeholder="Enter password" />
            <br/> <br/>
           <button>Submit</button>
           </form>
     </div>
   );
 };
 
 export default UncontrolledForm;
 