import { createRoot } from "react-dom/client";
import "./index.css";
import {MainPage} from "./MainPage";

const rootEl = document.getElementById("root") as HTMLElement;
const reactRoot = createRoot(rootEl);
reactRoot.render(<MainPage />);

