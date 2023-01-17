import React from "react";
import "./QuizMenu.css";
import { setQuizState } from "../../app/quiz/quizStateSlice";
import { useDispatch, useSelector } from "react-redux";

import Quiz from "../Quiz/Quiz";
import { useLocation } from "react-router-dom";

const QuizMenu = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const quizData = location.state.quizData;
  const quizState = useSelector((state) => state.quizState.value);
  const handleClick = () => {
    dispatch(setQuizState("running"));
  };
  return (
    <>
      {quizState === "menu" && (
        <div className="quiz-menu">
          <h2>{quizData.title}</h2>
          <p>{quizData.description}</p>
          <button className="btn" onClick={handleClick}>
            Begin test
          </button>
        </div>
      )}
      {quizState === "running" && <Quiz question={quizData.question} />}
    </>
  );
};

export default QuizMenu;
