import { configureStore } from "@reduxjs/toolkit";
import unitGroupReducer from "../features/unitGroupSlice.js";
import forecastDataReducer from "../features/forecastDataSlice.js";

export default configureStore({
	reducer: {
		unitGroup: unitGroupReducer,
		forecastData: forecastDataReducer,
	},
});
