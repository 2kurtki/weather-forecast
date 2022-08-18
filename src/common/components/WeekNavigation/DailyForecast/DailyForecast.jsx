import DateDisplay from "../DateDisplay/DateDisplay.jsx";
import WeatherIcon from "../../WeatherIcon/WeatherIcon.jsx";
import { useSelector, useDispatch } from "react-redux";
import { changeDay } from "Features/selectedDaySlice";
import styles from "./DailyForecast.scss";

function DailyForecast({ dailyForecastData, dayNum }) {
	const { temp, icon, datetime, conditions, humidity } = dailyForecastData;
	const dispatch = useDispatch();

	const selectedDayNum = useSelector((state) => state.selectedDay.number);
	const isDaySelected = dayNum === selectedDayNum;

	const containerClassName = `${styles.container} ${isDaySelected ? styles.selected : ""}`;
	const dateClassName = `${styles.date} ${isDaySelected ? styles.selected : ""}`;
	const conditionsClassName = `${styles.conditions} ${isDaySelected ? styles.selected : ""}`;
	const humidityClassName = `${styles.humidity} ${isDaySelected ? styles.selected : ""}`;

	return (
		<div className={containerClassName} onClick={() => dispatch(changeDay(dayNum))}>
			<div className={styles.title}>
				<div className={dateClassName}>
					<DateDisplay datetime={datetime} showDateNumber={isDaySelected} />
				</div>

				<div className={conditionsClassName}>
					<p>{conditions}</p>
				</div>
			</div>

			<div className={styles.content}>
				<div className={styles.iconWrapper}>
					<WeatherIcon iconName={icon} />
				</div>

				<div className={styles.indicators}>
					<div className={styles.temp}>
						<p>{Math.round(temp)}°</p>
					</div>

					<div className={humidityClassName}>
						<p>Humidity {Math.round(humidity)}%</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DailyForecast;
