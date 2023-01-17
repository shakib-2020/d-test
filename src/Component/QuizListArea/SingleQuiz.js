import React from "react";
import { Link } from "react-router-dom";
import "./QuizListArea.css";
const SingleQuiz = ({ quizData }) => {
  const { logo, title } = quizData;
  return (
    <>
      <Link
        to="/quizMenu"
        state={{ quizData }}
        style={{ textDecoration: "none" }}
      >
        <div className="single-test">
          <img src={logo} alt="" />
          <h4>{title}</h4>
        </div>
      </Link>
    </>
  );
};

export default SingleQuiz;
