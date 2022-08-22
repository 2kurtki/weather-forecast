import DailyForecast from "../DailyForecast/DailyForecast.jsx";
import { useSelector } from "react-redux";
import "./WeeklySummaryBar.scss";

function WeeklySummaryBar() {
	const forecastData = useSelector((state) => state.forecastData.data);
	const weekDays = [0, 1, 2, 3, 4];

	const dailyForecastList = weekDays.map((dayNum) => {
		const dailyForecastData = forecastData.days[dayNum];
		const dayId = dailyForecastData.datetime;

		return <DailyForecast dailyForecastData={dailyForecastData} dayNum={dayNum} key={dayId} />;
	});

	return <div styleName="wrapper">{dailyForecastList}</div>;
}

export default WeeklySummaryBar;
