import { createSlice } from "@reduxjs/toolkit";


// Zdefiniuj typ stanu
type AppStateType = {
    count: number,
};

// Zdefiniuj początkowy stan
const appInitState: AppStateType = {
    count: 0,
};

export const appSlice = createSlice({
    name: "app",
    initialState: appInitState,
    reducers: {
        increment: (state) => {
            // Zwiekszamy liczbe o 1
            return {
                ...state,
                count: state.count + 1
            }
        },

        decrement: (state) => {
            //Zmniejszamy liczbe o 1
            return {
                ...state,
                count: state.count  - 1
            }
        }
    }
})

export const { increment, decrement } = appSlice.actions;
export default appSlice.reducer