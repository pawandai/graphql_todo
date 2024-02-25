import { createSlice } from "@reduxjs/toolkit";

const todoCompletedSlice = createSlice({
  name: "todoCompleted",
  initialState: null,
  reducers: {
    setTodoCompleted(_, action) {
      return action.payload;
    },
  },
});

export const { setTodoCompleted } = todoCompletedSlice.actions;

export default todoCompletedSlice.reducer;
