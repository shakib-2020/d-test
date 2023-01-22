import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRegAns, resetRegAns } from "../../app/quiz/quizResultSlice";
import ProgressBar from "../ProgressBar/ProgressBar";
import Result from "../Result/Result";
import "./Quiz.css";

const Quiz = ({ title, question }) => {
  // states
  const [checked, setChecked] = useState("");
  const [currentQues, setCurrentQues] = useState(0);
  const [answerdList, setAnsweredList] = useState({});

  // variable
  const { ques, ans, option } = question[currentQues];
  const regAns = useSelector((state) => state.resultState.value.regAns);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // handle changes
  const handleChange = (event) => {
    const { value } = event.target;
    setChecked(value);
    dispatch(setRegAns({ value, currentQues }));
  };
  // handle next
  const handleNext = () => {
    setCurrentQues(currentQues + 1);
    if (!regAns[currentQues + 1]) {
      setChecked("");
    } else {
      setChecked(regAns[currentQues + 1]);
    }
    console.log(regAns);
  };
  // handle prev
  const handlePrev = () => {
    setCurrentQues(currentQues - 1);
    setChecked(regAns[currentQues - 1]);
  };
  // handle Submit
  const handleSubmit = () => {
    setChecked("");
    navigate("/submit");
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
          </div>
          <form>
            <div className="ques-input">
              <div className="single-input">
                <input
                  type="radio"
                  name="quiz-ques"
                  id="q1"
                  value="a"
                  checked={checked === "a"}
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
                  checked={checked === "b"}
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
                  checked={checked === "c"}
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
                  checked={checked === "d"}
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
          {currentQues === question.length - 1 ? (
            <button className="submit" type="button" onClick={handleSubmit}>
              Submit
            </button>
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
