import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./createSlice";

export default configureStore({
  reducer: {
    taskReducer: taskSlice,
  },
});
