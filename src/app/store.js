import { configureStore } from "@reduxjs/toolkit";
import quizStateReducer from "./quiz/quizStateSlice";

export const store = configureStore({
  reducer: {
    quizState: quizStateReducer,
  },
});
