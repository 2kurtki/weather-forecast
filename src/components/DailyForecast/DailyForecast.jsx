import styles from "./DailyForecast.scss";

function DailyForecast({ dailyForecastData }) {
	const { temp, icon, datetime } = dailyForecastData;

	const date = new Date(datetime);
	const formatOptions = { weekday: "long" };
	const weekday = new Intl.DateTimeFormat("en-US", formatOptions).format(date);
	const FULL_ICON_URL = process.env.ICON_URL + `${icon}.svg`;

	return (
		<div className={styles.wrapper}>
			<div className={styles.weekday}>
				<p>{weekday}</p>
			</div>

			<div className={styles.forecastInfo}>
				<div className={styles.icon}>
					<img src={FULL_ICON_URL}></img>
				</div>
				<p className={styles.temp}>{Math.round(temp)}°</p>
			</div>
		</div>
	);
}

export default DailyForecast;
