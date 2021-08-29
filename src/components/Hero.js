import React from "react";
import { NavLink } from "react-router-dom";



const Hero = ({address}) => (
  <div className="text-center hero my-5">
    <h1 className="mb-4">Welcome to Address management.</h1>
    <NavLink to="/address"><button
      style={{
        backgroundColor: "green",
        color: "white",
        fontSize: "30px",
        borderRadius: "5px",
      }}
    >
      Add Address
    </button></NavLink>
    <h4>{address.doorno} , {address.streetname} , {address.town} , {address.district} , {address.state} , {address.pincode}</h4>
      </div>
);

export default Hero;
