import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  task: [],
  userIndividualTask: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.task.length === 0) {
        state.task.push({ id: 1, status: 'pending', ...payload });
      } else {
        let lastElement = state.task.at(-1);
        state.task.push({
          id: lastElement.id + 1,
          status: 'pending',
          ...payload,
        });
      }
    },
    updateTask: (state, { payload }) => {
      let target = state.task.find((item) => item.id === payload.id);
      target.status = payload.status;
    },
    removeTask: (state, { payload }) => {
      state.task = state.task.filter((item) => item.id !== payload);
    },

    userTask: (state, { payload }) => {
      state.userIndividualTask = state.task.filter(
        (item) => item.assignedTo === payload
      );
    },
  },
});

export const { addTask, removeTask, updateTask, userTask } = taskSlice.actions;

export default taskSlice.reducer;
