import React from "react";

const SingleQuiz = ({ logo, title }) => {
  return (
    <>
      <div className="single-test text-center bg-gray-300 px-10 py-4 border-2 border-blue-200 rounded-md shadow-lg shadow-indigo-500/40">
        <img className="w-16 inline-block" src={logo} alt="" />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
    </>
  );
};

export default SingleQuiz;
