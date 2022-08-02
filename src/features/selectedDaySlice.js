import { createSlice } from "@reduxjs/toolkit";

const selectedDaySlice = createSlice({
	name: "selectedDay",
	initialState: {
		number: 0,
	},
	reducers: {
		changeDay(state, action) {
			state.number = action.payload;
		},
	},
});

export const { changeDay } = selectedDaySlice.actions;
export default selectedDaySlice.reducer;
