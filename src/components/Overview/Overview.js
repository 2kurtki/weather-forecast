import { useState, useEffect } from "react";
import styles from "./Overview.scss";

function Overview() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const currentDay = data?.days[0];
	const { temp, humidity, windspeed, conditions, feelslike, icon } =
		currentDay ?? {};

	const ICON_URL = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/2nd%20Set%20-%20Color/${icon}.svg`;

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const ARI_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Moscow?unitGroup=metric&iconSet=icons2&key=${process.env.API_KEY}`;

		try {
			const response = await fetch(ARI_URL);

			if (!response.ok) {
				throw new Error(`HTTP error: The status is ${response.status}`);
			}

			const actualData = await response.json();
			setData(actualData);
			setError(null);
		} catch (err) {
			setError(err.message);
			setData(null);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className={styles.overview}>
			{!isLoading && !error && (
				<div>
					<div className={styles.location}>
						<p>{data.address}</p>
					</div>
					<div className={styles.mainInfo}>
						<img src={ICON_URL} className={styles.icon}></img>
						<p className={styles.temp}>{Math.round(temp)}°</p>
					</div>
					<div className={styles.conditions}>
						<p>{conditions}</p>
					</div>
					<div className={styles.addInfoWrapper}>
						<p className={styles.additionalInfo}>
							Feels like {Math.round(feelslike)}°
						</p>
						<p className={styles.additionalInfo}>
							Wind {Math.round(windspeed)} km/h
						</p>
						<p className={styles.additionalInfo}>
							Humidity {Math.round(humidity)}%
						</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default Overview;
