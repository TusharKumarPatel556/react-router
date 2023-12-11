import React from "react";
import { useParams } from "react-router-dom";

const LangInfo = () => {
  const param = useParams();
  return (
    <div>
      <h3>We provides lectures on {param.lang} language also</h3>
    </div>
  );
};

export default LangInfo;
