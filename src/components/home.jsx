import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Home = (probs) => {
  const [course, setCourse] = useState();
  const [filterCourse, setFiltercourse] = useSearchParams();

  const searchCourse = () => {
    setFiltercourse({ ...filterCourse, filter: course });
  };
  const showCourse = () => {
    switch (filterCourse.get("filter")) {
      case "java":
        return <h2>Java playlist on tushars youtube channel</h2>;
      case "Kotlin":
        return <h2>Kotlin playlist on tushars youtube channel</h2>;
      default:
        return <h3>{filterCourse.get("filter")}</h3>;
    }
  };
  return (
    <div>
      <h1 className="text-center">Home page</h1>
      <h2>{probs.title}</h2>
      <input
        type="text"
        name=""
        value={course}
        onChange={(event) => setCourse(event.target.value)}
      />
      <button type="" onClick={searchCourse}>
        Fetch Course
      </button>
      {filterCourse.get("filter") ? showCourse() : ""}
    </div>
  );
};

export default Home;
