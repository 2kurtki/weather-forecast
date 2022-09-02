import { useSelector, useDispatch } from "react-redux";
import { changeLocation } from "Features/locationSlice";
import { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "./LocationSelector.scss";

function LocationSelector() {
	const location = useSelector((state) => state.location.value);
	const dispatch = useDispatch();
	const inputRef = useRef(null);
	const [isInputActive, setIsInputActive] = useState(false);

	const handleSubmit = (event) => {
		dispatch(changeLocation(inputRef.current.value));
		event.preventDefault();
	};

	const handleClick = () => {};

	return (
		<div styleName="container">
			{isInputActive && (
				<form onSubmit={handleSubmit}>
					<input ref={inputRef} type="text" />
				</form>
			)}
			<div styleName="locationName">
				<p>{location}</p>
			</div>

			<div styleName="penIcon" onClick={handleClick}>
				<FontAwesomeIcon icon={faPen} />
			</div>
		</div>
	);
}

export { LocationSelector };
