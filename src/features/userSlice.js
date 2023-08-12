import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, { payload }) => {
      state.name = payload;
    },
  },
});

export const { setName } = userSlice.actions;

export const userName = (state) => state.user.name;

export default userSlice.reducer;
