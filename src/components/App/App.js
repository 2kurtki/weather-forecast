import Overview from "../Overview/Overview.js";
import styles from "./App.scss";

function App() {
	return (
		<div className={styles.app}>
			<div className={styles.overviewWrapper}>
				<Overview />
			</div>
		</div>
	);
}

export default App;
