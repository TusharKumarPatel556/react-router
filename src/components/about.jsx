import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-center">about page</h1>
      <button className="btn btn-warning" type="" onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
};

export default About;
