import { configureStore } from "@reduxjs/toolkit";
import { unitGroupReducer, forecastDataReducer, selectedDayReducer } from "Features";

export const store = configureStore({
	reducer: {
		unitGroup: unitGroupReducer,
		forecastData: forecastDataReducer,
		selectedDay: selectedDayReducer,
	},
});
