import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AppStateType = {
  isDarkMode: boolean;
};

const appInitState: AppStateType = {
  isDarkMode: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState: appInitState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

// musimy wyciagnac akcje zeby potem z nich skorzystać
export const { toggleTheme } = appSlice.actions;
// musimy wyexportowac nasz caly reducer w celu dodania go do naszego contextu aplikacji
export default appSlice.reducer;