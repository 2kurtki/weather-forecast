import { configureStore } from "@reduxjs/toolkit";
import unitGroupReducer from "../features/unitGroup/unitGroupSlice";

export default configureStore({
	reducer: {
		unitGroup: unitGroupReducer,
	},
});
