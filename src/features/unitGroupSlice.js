import { createSlice } from "@reduxjs/toolkit";

const unitGroupSlice = createSlice({
	name: "unitGroup",
	initialState: {
		value: "metric",
	},
	reducers: {
		changeUnits(state, action) {
			state.value = action.payload;
		},
	},
});

export const unitGroupReducer = unitGroupSlice.reducer;
export const { changeUnits } = unitGroupSlice.actions;
