import { createRoot } from "react-dom/client";
import { App } from "./common/components";
import { store } from "./app";
import { Provider } from "react-redux";
import "./styles/index.scss";

const root = createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
