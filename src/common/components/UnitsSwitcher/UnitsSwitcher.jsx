import styles from "./UnitsSwitcher.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeUnits, selectUnitGroup } from "../../../features/unitGroupSlice.js";

function UnitsSwitcher() {
	const unitGroup = useSelector(selectUnitGroup);
	const dispatch = useDispatch();
	const isMetricGroup = unitGroup === "metric";

	return (
		<div className={styles.wrapper}>
			<button
				onClick={() => dispatch(changeUnits("metric"))}
				className={isMetricGroup ? "" : styles.disabled}>
				C
			</button>
			<button
				onClick={() => dispatch(changeUnits("us"))}
				className={isMetricGroup ? styles.disabled : ""}>
				F
			</button>
		</div>
	);
}

export default UnitsSwitcher;
