import React, { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./Quiz.css";

const Quiz = ({ question }) => {
  const [currentQues, setCurrentQues] = useState(0);
  const [selectedAns, setSelectedAns] = useState([]);
  const [checkValue, setCheckValue] = useState("");
  const [submit, setSubmit] = useState(false);
  const [tempResult, setTempResult] = useState(0);

  const { ques, ans, option } = question[currentQues];

  const handleChange = (e) => {
    const { value, checked } = e.target;

    setSelectedAns(value);
    console.log(checked);
    setCheckValue(value);
  };

  const handleNext = (e) => {
    if (question.length - 1 === currentQues) {
      setSubmit(true);

      if (selectedAns === ans) {
        setTempResult(tempResult + 1);
      }
      setCheckValue("");

      console.log(selectedAns);
    } else {
      setCurrentQues(currentQues + 1);
      if (selectedAns === ans) {
        setTempResult(tempResult + 1);
      }
      setCheckValue("");
    }
  };

  const handlePrev = () => {
    setCurrentQues(currentQues - 1);
  };

  return (
    <>
      <ProgressBar />
      <section>
        <div className="question-form">
          <div className="ques-text">
            <h5>Question 1-50</h5>
            <h4>{ques}</h4>
            <h5>Choose one</h5>
            <h5>Result = {tempResult} </h5>
          </div>
          <form>
            <div className="ques-input">
              <div className="single-input">
                <input
                  type="radio"
                  name="quiz-ques"
                  id="q1"
                  value="a"
                  checked={checkValue === "a"}
                  onChange={handleChange}
                />
                <label htmlFor="q1">{option[0].a}</label>
              </div>

              <div className="single-input">
                <input
                  type="radio"
                  name="quiz-ques"
                  id="q2"
                  value="b"
                  checked={checkValue === "b"}
                  onChange={handleChange}
                />
                <label htmlFor="q2">{option[0].b}</label>
              </div>

              <div className="single-input">
                <input
                  type="radio"
                  name="quiz-ques"
                  id="q3"
                  value="c"
                  checked={checkValue === "c"}
                  onChange={handleChange}
                />
                <label htmlFor="q3">{option[0].c}</label>
              </div>

              <div className="single-input">
                <input
                  type="radio"
                  name="quiz-ques"
                  id="q4"
                  value="d"
                  checked={checkValue === "d"}
                  onChange={handleChange}
                />
                <label htmlFor="q4">{option[0].d}</label>
              </div>
            </div>
          </form>
        </div>
        <div className="quiz-action-btn">
          <button type="button" onClick={handlePrev}>
            Prev
          </button>
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
