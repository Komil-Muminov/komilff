import "./App.css";
import "./index.css";

import NavLinks from "./navigation/NavLinks";
import PersonPage from "./components/Person/PersonPage";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

function App() {
	return (
		<div className="container max-w-7xl m-auto">
			<NavLinks />
			<PersonPage />
			<Experience />
			<Projects />
		</div>
	);
}

export default App;

