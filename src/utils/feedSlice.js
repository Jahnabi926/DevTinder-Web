import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addUserToFeed: (state, action) => action.payload,
    removeUserFromFeed: (state, action) => {
      const newArray = state.filter((r) => r._id !== action.payload); // logic to remove the user from the state (array) once user clicks on ignore or interested
      return newArray;
    },
  },
});

export const { addUserToFeed, removeUserFromFeed } = feedSlice.actions;
export default feedSlice.reducer;
