import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import Projects from "./pages/projects";
import WorkExperience from "./pages/work";
import Resume from "./pages/resume";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

import 'semantic-ui-css/semantic.min.css'

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<Homepage />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/work" element={<WorkExperience />} />
				<Route path="/resume" element={<Resume />} />
				<Route path="*" element={<Resume />} />
			</Routes>
		</div>
	);
}

export default App;
