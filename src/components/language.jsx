import React from "react";
import { Outlet } from "react-router-dom";

const Language = () => {
  return (
    <div>
      <h2>we provide video lectures on all most all computer languages</h2>
      <Outlet />
    </div>
  );
};

export default Language;
