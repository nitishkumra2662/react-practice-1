import React, { useReducer } from "react";

const emptyData={
        name:'',
        password:'',
        city:'',
        email:''
    }
    const reducer=(data,action)=>{
        return{...data,[action.type]:action.val}
    }

const LargeForm = () => {
    const [state, dispatch]=useReducer(reducer,emptyData);
  return (

    <div>
      <h1>Use Reducer</h1>
      <input type="text" onChange={(event)=>dispatch({val:event.target.value, type:'name'})} placeholder="Enter name" />
            <br/> <br/>
      <input type="text" onChange={(event)=>dispatch({val:event.target.value, type:'password'})}  placeholder="Enter password" />
            <br/> <br/>
      <input type="text" onChange={(event)=>dispatch({val:event.target.value, type:'city'})}  placeholder="Enter city" />
            <br/> <br/>
      <input type="text" onChange={(event)=>dispatch({val:event.target.value, type:'email'})}  placeholder="Enter email" />
            <br/> <br/>
            <ul>
                <li>Name:{state.name}</li>
                <li>Password:{state.password}</li>
                <li>City:{state.city}</li>
                <li>Email:{state.email}</li>
            </ul>
    </div>
  );
};

export default LargeForm;
