import Overview from "../Overview/Overview.jsx";
import WeeklySummaryBar from "../WeekNavigation/WeeklyNavigationBar/WeeklySummaryBar.jsx";
import { fetchForecastData } from "../../../features/forecastDataSlice.js";
import { selectUnitGroup } from "../../../features/unitGroupSlice.js";
import { useSelector, useDispatch } from "react-redux";
import styles from "./App.scss";
import { useEffect } from "react";

function App() {
	const dispatch = useDispatch();
	const unitGroup = useSelector(selectUnitGroup);
	const { data, status } = useSelector((state) => state.forecastData);

	useEffect(() => {
		dispatch(fetchForecastData(unitGroup));
	}, [unitGroup, dispatch]);

	return (
		<div className={styles.app}>
			{status !== "failed" && data !== null && (
				<div className={styles.wrapper}>
					<Overview />
					<WeeklySummaryBar />
				</div>
			)}
		</div>
	);
}

export default App;
