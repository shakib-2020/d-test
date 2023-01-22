import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    regAns: {},
    result: 0,
  },
};

export const quizResultSlice = createSlice({
  name: "quizResult",
  initialState,
  reducers: {
    setResult: (state, action) => {},
    setRegAns: (state, action) => {
      const { value, currentQues } = action.payload;
      console.log(value, currentQues);
      let obj = {};
      obj[currentQues] = value;
      if (obj[currentQues]) {
        let tempRegAns = state.value.regAns;
        tempRegAns[currentQues] = obj[currentQues];
        state.value.regAns = tempRegAns;
      } else {
        state.value.regAns = {
          ...state.value.regAns,
          ...obj,
        };
      }
    },
    resetRegAns: (state, action) => {
      state.value.regAns = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setResult, setRegAns, resetRegAns } = quizResultSlice.actions;

export default quizResultSlice.reducer;
