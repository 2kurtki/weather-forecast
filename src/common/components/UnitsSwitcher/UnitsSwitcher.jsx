import "./UnitsSwitcher.scss";
import { useSelector, useDispatch } from "react-redux";
import { changeUnits, selectUnitGroup } from "Features/unitGroupSlice.js";

function UnitsSwitcher() {
	const unitGroup = useSelector(selectUnitGroup);
	const dispatch = useDispatch();
	const isMetricGroup = unitGroup === "metric";

	return (
		<div styleName="wrapper">
			<button
				onClick={() => dispatch(changeUnits("metric"))}
				styleName={!isMetricGroup && "disabled"}>
				C
			</button>
			<button
				onClick={() => dispatch(changeUnits("us"))}
				styleName={isMetricGroup && "disabled"}>
				F
			</button>
		</div>
	);
}

export default UnitsSwitcher;
