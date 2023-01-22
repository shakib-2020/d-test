import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "./Result.css";

const Result = () => {
  const regAns = useSelector((state) => state.resultState.value.regAns);
  console.log(regAns);
  return <div>Result</div>;
};

export default Result;
