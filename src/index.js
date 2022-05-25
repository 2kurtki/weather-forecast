import { createRoot } from "react-dom/client";
import App from "./components/App/App.js";
import "./index.scss";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
