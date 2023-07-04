import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "taskSlice",
  initialState: {
    taskList: [],
  },
  reducers: {
    // Add Task Operation
    addTask: (state, action) => {
      state.taskList.push(action.payload);
    },
    // Update Task Operation
    updateTask: (state, action) => {
      const index = action.payload.taskIndex;

      const taskItem = state.taskList.find((item) => {
        return item.id === action.payload.data.id;
      });

      if (taskItem) {
        state.taskList[index].id = action.payload.data.id;
        state.taskList[index].taskTitle = action.payload.data.taskTitle;
        state.taskList[index].description = action.payload.data.description;
        state.taskList[index].iscompleted = action.payload.data.iscompleted;
      }
    },
    // Delete Task Operation
    deleteTask: (state, action) => {
      const taskItem = state.taskList.find(
        (item) => item.id === action.payload
      );
      if (taskItem) {
        state.taskList = state.taskList.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    // Completed Task Operation
    isCompleted: (state, action) => {
      console.log(action.payload);
      const index = action.payload.taskIndex;

      const taskItem = state.taskList.find((item) => {
        return item.id === action.payload.id;
      });

      if (taskItem) {
        if (action.payload.iscompleted === true) {
          state.taskList[index].iscompleted = false;
        } else {
          state.taskList[index].iscompleted = true;
        }
      }
    },
  },
});

export default taskSlice.reducer;
export const { addTask, updateTask, deleteTask, isCompleted } =
  taskSlice.actions;
