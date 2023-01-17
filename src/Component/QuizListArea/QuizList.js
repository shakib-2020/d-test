import React from "react";
import "./QuizListArea.css";
import SingleQuiz from "./SingleQuiz";

const List = [
  {
    id: 1,
    logo: "https://cdn-icons-png.flaticon.com/512/741/741407.png",
    title: "Mock test-1",
    description:
      "You have 57 minutes to answer 50 multiple choice driving theory test questions from the latest 2023 question bank. At least 43 out of 50 questions must be answered correctly in order to pass the test. Answers may be reviewed after each question or you can wait until the end of the test for your final score. Good luck!",
    question: [
      {
        ques: "What is your Name?",
        ans: "a",
        option: [
          {
            a: "Shakib",
            b: "Rakib",
            c: "Takib",
            d: "Akib",
          },
        ],
      },
      {
        ques: "How old are you?",
        ans: "b",
        option: [
          {
            a: "29",
            b: "20",
            c: "21",
            d: "22",
          },
        ],
      },
      {
        ques: "Where do you live?",
        ans: "c",
        option: [
          {
            a: "Dhaka",
            b: "Chottogram",
            c: "Sylhet",
            d: "Rongpur",
          },
        ],
      },
    ],
  },
];

function QuizList() {
  return (
    <>
      <section>
        <div className="test-list-wrapper">
          {List.map((item) => {
            return <SingleQuiz key={item.id} quizData={item} />;
          })}
        </div>
        <div className="load-more-list text-center mt-100">
          <button className="btn">Load More</button>
        </div>
      </section>
    </>
  );
}

export default QuizList;
