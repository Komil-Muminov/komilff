import NavLinks from "./navigation/NavLinks";
import PersonPage from "./components/Person/PersonPage";
import Experience from "./components/Experience/Experience";
// import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="container">
			<NavLinks />
			<PersonPage />
			{/* <Projects /> */}
			<Experience />
			<Contacts />
			<Footer />
		</div>
	);
}

export default App;

