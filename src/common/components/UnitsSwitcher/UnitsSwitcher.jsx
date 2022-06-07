import styles from "./UnitsSwitcher.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeUnits } from "../../../features/unitGroup/unitGroupSlice.js";

function UnitsSwitcher() {
	const unitGroup = useSelector((state) => state.unitGroup.value);
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
