import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: { list: [] },
  reducers: {
    getUsers: (users, action) => {
      users.list = action.payload;
    },
  },
});

export const { getUsers } = usersSlice.actions;

export default usersSlice.reducer;
