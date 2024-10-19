import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  name: 'Rony Mia',
  email: 'iamsobahan@gmail.com',
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
