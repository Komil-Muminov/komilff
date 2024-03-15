import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// -----------------------------------------------------------------
import Footer from "./components/Footer/Footer";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Navigation from "./navigation/Navigation";
import Contacts from "./components/Contacts/Contacts";
import Experience from "./components/Experience/Experience";
import PersonPage from "./components/Person/PersonPage";
import Home from "./components/Home/Home";

// -----------------------------------------------------------------

function App() {
	useEffect(() => {
		AOS.init({
			delay: 300,
		});
		AOS.refresh();
	}, []);
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="*" element={<ErrorPage />} />
				<Route path="/Home" element={<Home />} />
				<Route path="/Contacts" element={<Contacts />} />
				<Route path="/Experience" element={<Experience />} />
				<Route path="/PersonPage" element={<PersonPage />} />
			</Routes>
			<Footer />
		</>
	);
}
export default App;
