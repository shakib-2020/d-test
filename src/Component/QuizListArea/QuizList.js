import React from "react";
import SingleQuiz from "./SingleQuiz";

const List = [
  {
    logo: "https://cdn-icons-png.flaticon.com/512/741/741407.png",
    title: "Mock test-1",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/741/741407.png",
    title: "Mock test-2",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/741/741407.png",
    title: "Mock test-3",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/741/741407.png",
    title: "Mock test-4",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/741/741407.png",
    title: "Mock test-5",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/741/741407.png",
    title: "Mock test-6",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/741/741407.png",
    title: "Mock test-7",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/741/741407.png",
    title: "Mock test-8",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/741/741407.png",
    title: "Mock test-9",
  },
  {
    logo: "https://cdn-icons-png.flaticon.com/512/741/741407.png",
    title: "Mock test-10",
  },
];

function QuizList() {
  return (
    <>
      <section>
        <div className="quiz-list w-full px-16 pt-32">
          <div className="flex flex-wrap justify-center gap-8">
            {List.map((item) => {
              return <SingleQuiz logo={item.logo} title={item.title} />;
            })}
          </div>
        </div>
        <div className="load-more-list text-center mt-40">
          <button
            className="font-semibold px-8 py-4 bg-red-600 text-white hover:bg-red-400
                hover:text-black border-2 border-transparent transition duration-500 rounded-md ml-2 uppercase"
          >
            Load More
          </button>
        </div>
      </section>
    </>
  );
}

export default QuizList;
