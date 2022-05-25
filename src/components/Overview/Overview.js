import styles from "./Overview.scss";

function Overview() {
	return (
		<div className={styles.overview}>
			<div className={styles.location}>
				<p>Moscow, Russia</p>
			</div>

			<div className={styles.temperature}>
				<p>23°</p>
			</div>
			<div className={styles.assessment}>
				<p>Mostly Sunny</p>
			</div>

			<div className={styles.addInfoWrapper}>
				<p className={styles.additionalInfo}>Feels like 18°</p>
				<p className={styles.additionalInfo}>Wind 8 km/h</p>
				<p className={styles.additionalInfo}>Humidity 2%</p>
			</div>
		</div>
	);
}

export default Overview;
