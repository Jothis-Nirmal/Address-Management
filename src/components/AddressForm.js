import React, { useState } from "react";
import { NavLink } from "react-router-dom";



function AddressForm({address,setAddress}) {
  const [isAdd,setIsAdd]=useState(false)
  return (
    <div>
    {!isAdd &&
    <div>
       <h1 style={{textAlign:"center"}}>Enter your Address </h1>
      <form style={{display:"inline-block"}}>

        <label>Door No</label>
        <input class="form" value={address.doorno} onChange={(e)=>setAddress({...address,doorno:e.target.value})}/><br/><br/>
        <label>Street Name</label>
        <input value={address.streetname} onChange={(e)=>setAddress({...address,streetname:e.target.value})}/><br/><br/>
        <label>Town Name</label>
        <input value={address.town} onChange={(e)=>setAddress({...address,town:e.target.value})}/><br/><br/>
        <label >District</label>
        <input value={address.district} onChange={(e)=>setAddress({...address,district:e.target.value})}/><br/><br/>
        <label>State</label>
        <input value={address.state} onChange={(e)=>setAddress({...address,state:e.target.value})}/><br/><br/>
        <label>Pincode</label>
        <input value={address.pincode} onChange={(e)=>setAddress({...address,pincode:e.target.value})}/><br/><br/>
        <button onClick={()=>setIsAdd(true)} style={{fontSize:25, borderRadius: "10px",alignItems:"center",}} >Submit</button>
      </form>
    </div>}
    {isAdd && <div>
      <h1>Address Added</h1>
      <NavLink to="/"><button>Back to Home</button></NavLink>
      </div>}
    </div>
  );
}

export default AddressForm;
