import { configureStore } from "@reduxjs/toolkit";
import {
	unitGroupReducer,
	forecastDataReducer,
	selectedDayReducer,
	locationReducer,
} from "Features";

export const store = configureStore({
	reducer: {
		unitGroup: unitGroupReducer,
		forecastData: forecastDataReducer,
		selectedDay: selectedDayReducer,
		location: locationReducer,
	},
});
