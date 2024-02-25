// todoIdSlice.js

import { createSlice } from "@reduxjs/toolkit";

const todoIdSlice = createSlice({
  name: "todoId",
  initialState: null,
  reducers: {
    setTodoId(_, action) {
      return action.payload;
    },
  },
});

export const { setTodoId } = todoIdSlice.actions;
export default todoIdSlice.reducer;
