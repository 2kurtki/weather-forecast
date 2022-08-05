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
	const contentClassName = `${styles.content} ${isDaySelected ? styles.selected : ""}`;

	return (
		<div className={containerClassName} onClick={() => dispatch(changeDay(dayNum))}>
			<div className={contentClassName}>
				<div className={styles.title}>
					<DateDisplay datetime={datetime} showFullDate={isDaySelected} />
				</div>

				{isDaySelected && (
					<div className={styles.iconWrapper}>
						<WeatherIcon iconName={icon} />
					</div>
				)}
			</div>

			<div className={contentClassName}>
				{isDaySelected ? (
					<div className={styles.title}>
						<p>{conditions}</p>
					</div>
				) : (
					<div className={styles.iconWrapper}>
						<WeatherIcon iconName={icon} />
					</div>
				)}

				<div className={styles.temp}>
					<p>{Math.round(temp)}°</p>
				</div>

				{isDaySelected && (
					<div className={styles.humidity}>
						<p>Humidity {Math.round(humidity)}%</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default DailyForecast;
