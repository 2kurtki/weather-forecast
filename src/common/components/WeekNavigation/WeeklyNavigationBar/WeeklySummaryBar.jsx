import DailyForecast from "../DailyForecast/DailyForecast.jsx";
import { useSelector } from "react-redux";
import styles from "./WeeklySummaryBar.scss";
// import DetailedDailyForecast from "../DetailedDailyForecast/DetailedDailyForecast.jsx";

function WeeklySummaryBar() {
	const forecastData = useSelector((state) => state.forecastData.data);
	// const selectedDayNum = useSelector((state) => state.selectedDay.number);
	const weekDays = [0, 1, 2, 3, 4];

	// const selectedDayNum = -1;

	const dailyForecastList = weekDays.map((dayNum) => {
		const dailyForecastData = forecastData.days[dayNum];
		const dayId = dailyForecastData.datetime;

		// if (dayNum === selectedDayNum) {
		// 	return (
		// 		<DetailedDailyForecast
		// 			dailyForecastData={dailyForecastData}
		// 			key={dayId}
		// 		/>
		// 	);
		// } else {
		return (
			<DailyForecast
				dailyForecastData={dailyForecastData}
				dayNum={dayNum}
				key={dayId}
			/>
		);
		// }
	});

	return <div className={styles.wrapper}>{dailyForecastList}</div>;
}

export default WeeklySummaryBar;
