import DateDisplay from "../DateDisplay/DateDisplay.jsx";
import WeatherIcon from "../../WeatherIcon/WeatherIcon.jsx";
import { useDispatch } from "react-redux";
import { changeDay } from "Features/selectedDaySlice";
import styles from "./DailyForecast.scss";

function DailyForecast({ dailyForecastData, dayNum }) {
	const { temp, icon, datetime } = dailyForecastData;
	const dispatch = useDispatch();

	return (
		<div className={styles.container} onClick={() => dispatch(changeDay(dayNum))}>
			<div className={styles.title}>
				<DateDisplay datetime={datetime} />
			</div>

			<div className={styles.forecastInfo}>
				<div className={styles.iconWrapper}>
					<WeatherIcon iconName={icon} />
				</div>

				<div className={styles.temp}>
					<p>{Math.round(temp)}°</p>
				</div>
			</div>
		</div>
	);
}

export default DailyForecast;
