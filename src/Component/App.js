import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "../index.css";
import Home from "./Home/Home";
import QuizMenu from "./QuizMenu/QuizMenu";

function App() {
  const quizState = useSelector((state) => state.quizState.value);

  console.log(quizState);
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/quizMenu" element={<QuizMenu />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
