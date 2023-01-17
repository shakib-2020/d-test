import React from "react";

const QuizForm = ({ ques, ans, option }) => {
  return (
    <>
      <div className="question-form">
        <div className="ques-text">
          <h5>Question 1-50</h5>
          <h4>{ques}</h4>
          <h5>Choose one</h5>
        </div>
        <div className="ques-input">
          <div className="single-input">
            <input type="checkbox" name="q1" id="q1" />
            <label>{option[0].a}</label>
          </div>
          <div className="single-input">
            <input type="checkbox" name="q2" id="q2" />
            <label>{option[0].b}</label>
          </div>
          <div className="single-input">
            <input type="checkbox" name="q3" id="q3" />
            <label>{option[0].c}</label>
          </div>
          <div className="single-input">
            <input type="checkbox" name="q4" id="q4" />
            <label>{option[0].d}</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizForm;
