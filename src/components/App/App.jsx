import Overview from "../Overview/Overview.jsx";
import WeeklySummaryBar from "../WeeklySummaryBar/WeeklySummaryBar.jsx";
import useForecastData from "../../hooks/useForecastData.js";
import styles from "./App.scss";

function App() {
	const [forecastData, error, isLoading, unitGroup, setUnitGroup] = useForecastData();

	return (
		<div className={styles.app}>
			{!isLoading && !error && (
				<div className={styles.wrapper}>
					<Overview
						forecastData={forecastData}
						unitGroup={unitGroup}
						setUnitGroup={setUnitGroup}
					/>
					<WeeklySummaryBar forecastData={forecastData} />
				</div>
			)}
		</div>
	);
}

export default App;
