import { configureStore } from "@reduxjs/toolkit";
import quizStateReducer from "./quiz/quizStateSlice";

import resultStateReducer from "./quiz/quizResultSlice";

export const store = configureStore({
  reducer: {
    quizState: quizStateReducer,
    resultState: resultStateReducer,
  },
});
