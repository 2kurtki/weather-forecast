import styles from "./DateDisplay.scss";

function DateDisplay({ datetime, showDateNumber }) {
	const date = new Date(datetime);
	const formatOptions = { weekday: "long" };
	const weekday = new Intl.DateTimeFormat("en-US", formatOptions).format(date);
	const calendarDate = date.getDate();

	const dateNumberClassName = `${styles.dateNumber} ${showDateNumber ? styles.selected : ""}`;

	return (
		<div className={styles.container}>
			<p>{weekday}</p>
			<p className={dateNumberClassName}>{" " + calendarDate}</p>
		</div>
	);
}

export default DateDisplay;
