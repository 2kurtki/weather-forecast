import DateDisplay from "../DateDisplay/DateDisplay.jsx";
import WeatherIcon from "../../WeatherIcon/WeatherIcon.jsx";
import styles from "./DetailedDailyForecast.scss";

function DetailedDailyForecast({ dailyForecastData }) {
	const { temp, icon, datetime, conditions, humidity } = dailyForecastData;

	return (
		<div className={styles.container}>
			<div className={styles.forecastInfo}>
				<div className={styles.title}>
					<DateDisplay datetime={datetime} showFullDate />
				</div>

				<div className={styles.iconWrapper}>
					<WeatherIcon iconName={icon} />
				</div>
			</div>

			<div className={styles.forecastInfo}>
				<div className={styles.title}>
					<p>{conditions}</p>
				</div>

				<div className={styles.temp}>
					<p>{Math.round(temp)}°</p>
				</div>

				<div className={styles.humidity}>
					<p>Humidity {Math.round(humidity)}%</p>
				</div>
			</div>
		</div>
	);
}

export default DetailedDailyForecast;
