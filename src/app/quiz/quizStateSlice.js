import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "menu",
};

export const quizStateSlice = createSlice({
  name: "quizState",
  initialState,
  reducers: {
    setQuizState: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setQuizState } = quizStateSlice.actions;

export default quizStateSlice.reducer;
