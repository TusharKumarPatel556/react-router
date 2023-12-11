import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Page Not Found</h2>
      <button
        className="btn btn-warning"
        onClick={() => navigate("/about", { replace: true })}
      >
        Home Page
      </button>
    </div>
  );
};

export default ErrorPage;
