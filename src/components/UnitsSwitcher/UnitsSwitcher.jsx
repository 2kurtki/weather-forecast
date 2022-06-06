import styles from "./UnitsSwitcher.scss";

function UnitsSwitcher({ unitGroup, setUnitGroup }) {
	const isMetricGroup = unitGroup === "metric";

	const handleClick = () => {
		isMetricGroup ? setUnitGroup("us") : setUnitGroup("metric");
	};

	return (
		<div className={styles.wrapper}>
			<button
				onClick={handleClick}
				className={isMetricGroup ? "" : styles.disabled}>
				C
			</button>
			<button
				onClick={handleClick}
				className={isMetricGroup ? styles.disabled : ""}>
				F
			</button>
		</div>
	);
}

export default UnitsSwitcher;
