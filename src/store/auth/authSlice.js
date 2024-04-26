import { createSlice } from "@reduxjs/toolkit";
import { loginUser, singupUser } from "./authThunk";
import { toast } from "react-toastify";

const initialState = {
  user: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      Cookies.remove("token");
      localStorage.removeItem("auth");
    },
    removeExistingUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(singupUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addMatcher(
        // Match all thunk actions (pending, fulfilled, rejected)
        (action) => action.type.startsWith("user/"),
        (state, action) => {
          switch (action.type.split("/")[2]) {
            case "pending":
              state.isLoading = true;
              break;
            case "fulfilled":
              state.isLoading = false;
              break;
            case "rejected":
              state.isLoading = false;
              toast.error("Something went wrong!");
              break;
          }
        }
      );
  },
});
export const { logoutUser, removeExistingUser } = userSlice.actions;
export const resetAllSlices = () => {
  return { type: "RESET_ALL_SLICES" };
};
export default userSlice.reducer;
