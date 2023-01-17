import React from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
  return (
    <>
      <section>
        <div className="quiz-area mt-50">
          <div className="progress-area">
            <div className="progress-bar">
              <div className="box">
                <div className="loader"></div>
              </div>
            </div>
          </div>
          <div className="timer">
            <p>01:00:00</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgressBar;
