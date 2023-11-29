import NavLinks from "./navigation/NavLinks";
import PersonPage from "./components/Person/PersonPage";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

function App() {
	return (
		<div className="container">
			<NavLinks />
			<PersonPage />
		</div>
	);
}

export default App;

