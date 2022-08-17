import styles from "./DateDisplay.scss";
import { useTransition, animated } from "@react-spring/web";

function DateDisplay({ datetime, showFullDate }) {
	const date = new Date(datetime);
	const formatOptions = { weekday: "long" };
	const weekday = new Intl.DateTimeFormat("en-US", formatOptions).format(date);
	const calendarDate = date.getDate();

	const transition = useTransition(showFullDate, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	});

	return (
		<div className={styles.container}>
			<p>{weekday}</p>
			{transition(
				(style, item) => item && <animated.p style={style}>{" " + calendarDate}</animated.p>
			)}
		</div>
	);
}

export default DateDisplay;
