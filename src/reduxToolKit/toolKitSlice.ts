import { createSlice } from "@reduxjs/toolkit";
import { ItoolKitStore } from "./type";

const initialState: ItoolKitStore = { refresh: "", access: "" };

const toolKitSlice = createSlice({
  name: "mainReducer",
  initialState,
  reducers: {
    setUserKeys(state, { payload }) {
      state.refresh = payload.refresh;
      state.access = payload.refresh;
    },
    clearUserKeys(state) {
      state.refresh = "";
      state.access = "";
    },
  },
});

export default toolKitSlice.reducer;

export const { setUserKeys, clearUserKeys } = toolKitSlice.actions;
