import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import App from "./container/App";
import 'antd/dist/antd.css';
import "./assets/global.css";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Router><App/></Router>);