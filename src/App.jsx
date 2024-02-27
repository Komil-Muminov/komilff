import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// -----------------------------------------------------------------
import NavLinks from "./navigation/NavLinks";
import Home from "./components/Home/Home";
import PersonPage from "./components/Person/PersonPage";
import Experience from "./components/Experience/Experience";
import Contacts from "./components/Contacts/Contacts";
import Pastlives from "./components/PastLive/Pastlives";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Registration from "./components/registration/Registration";
// import Slider from "./components/Slider/Slider";
// import Products from "./components/Products/Products";
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
			{/* <Products /> */}
			<Registration />
			<NavLinks />
			<Routes>
				<Route path="*" element={<ErrorPage />} />
				<Route path="/" element={<Navigate to="/Home" />} />
				<Route
					path="/Home"
					element={
						<div data-aos="fade-left">
							<Home />
						</div>
					}
				/>
				<Route
					path="/PersonPage"
					element={
						<div data-aos="fade-right">
							<PersonPage />
						</div>
					}
				/>
				<Route
					path="/Contacts"
					element={
						<div data-aos="fade-left">
							<Contacts />
						</div>
					}
				/>
				<Route
					path="/Experience"
					element={
						<div data-aos="fade-right">
							<Experience />
						</div>
					}
				/>
				<Route
					path="/Pastlives"
					element={
						<div data-aos="fade-right">
							<Pastlives />
						</div>
					}
				/>
				{/* <Route
					path="/Products"
					element={
						<div data-aos="fade-right">
							<Products />
						</div>
					}
				/> */}
			</Routes>
			<Footer />
		</>
	);
}
export default App;
