// store.js

import {configureStore} from '@reduxjs/toolkit';
import todoSlice from "@/redux/todoIdSlice.ts";
import todoCompletedSlice from "@/redux/todoCompletedSlice.ts";

export default configureStore({
    reducer: {
        todoId: todoSlice,
        todoCompleted: todoCompletedSlice
    },
});
