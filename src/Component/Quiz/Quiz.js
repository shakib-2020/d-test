import React, { useEffect, useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./Quiz.css";
import QuizForm from "./QuizForm";

const Quiz = ({ question }) => {
  const [currentQues, setCurrentQues] = useState(0);
  const [submit, setSubmit] = useState(false);
  const handleNext = () => {
    console.log(currentQues);
    console.log(question.length);
    if (question.length - 1 === currentQues) {
      setSubmit(true);
    } else {
      setCurrentQues(currentQues + 1);
    }
  };
  const { ques, ans, option } = question[currentQues];

  return (
    <>
      <ProgressBar />
      <section>
        {currentQues <= question.length && (
          <QuizForm ques={ques} ans={ans} option={option} />
        )}
        <div className="quiz-action-btn">
          <button type="button">Prev</button>
          {submit ? (
            <button type="button">Submit</button>
          ) : (
            <button type="button" onClick={handleNext}>
              Next
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default Quiz;
