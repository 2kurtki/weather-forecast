import { configureStore } from "@reduxjs/toolkit";
import unitGroupReducer from "Features/unitGroupSlice";
import forecastDataReducer from "Features/forecastDataSlice.js";
import selectedDayReducer from "Features/selectedDaySlice.js";

export default configureStore({
	reducer: {
		unitGroup: unitGroupReducer,
		forecastData: forecastDataReducer,
		selectedDay: selectedDayReducer,
	},
});
