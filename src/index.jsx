import { createRoot } from "react-dom/client";
import App from "./common/components/App/App.jsx";
import "./index.scss";
import store from "./app/store.js";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
