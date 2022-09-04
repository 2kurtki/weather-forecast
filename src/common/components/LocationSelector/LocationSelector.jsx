import { useSelector, useDispatch } from "react-redux";
import { changeLocation } from "Features/locationSlice";
import { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./LocationSelector.scss";

function LocationSelector() {
	const location = useSelector((state) => state.location.value);
	const dispatch = useDispatch();
	const inputRef = useRef(null);

	const [isInputActive, setIsInputActive] = useState(false);
	const [isFormFocused, setIsFormFocused] = useState(false);

	const formStyleName = isFormFocused ? "form focused" : "form";

	const handleSubmit = (event) => {
		dispatch(changeLocation(inputRef.current.value));
		setIsInputActive(false);
		event.preventDefault();
	};

	const handleClick = () => {
		setIsInputActive(true);
	};

	return (
		<div styleName="container">
			{isInputActive ? (
				<form styleName={formStyleName} onSubmit={handleSubmit}>
					<input
						styleName="input"
						ref={inputRef}
						defaultValue={location}
						placeholder="Enter a location"
						type="text"
						onFocus={() => setIsFormFocused(true)}
						onBlur={() => setIsFormFocused(false)}
					/>
					<button styleName="searchButton">
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</button>
				</form>
			) : (
				<>
					<div styleName="locationName">
						<p>{location}</p>
					</div>

					<div styleName="penIcon" onClick={handleClick}>
						<FontAwesomeIcon icon={faPen} />
					</div>
				</>
			)}
		</div>
	);
}

export { LocationSelector };
