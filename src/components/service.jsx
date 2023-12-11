import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./header.css";

const Service = () => {
  return (
    <div>
      <h1 className="text-center">We are providing following services</h1>
      <nav>
        <NavLink to="onlineservice">Online Service</NavLink>
        <br />
        <NavLink to="onlinevideos">Online videos</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default Service;
