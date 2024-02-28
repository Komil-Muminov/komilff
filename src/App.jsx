import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// -----------------------------------------------------------------
// import Home from "./components/Home/Home";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./components/ErrorPage/ErrorPage";
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
			<Routes>
				<Route path="/" element={<Navigate to="/Join" />} />
				<Route path="*" element={<ErrorPage />} />
				<Route
					path="/Join"
					element={
						<div data-aos="fade-right">
							<Join />
						</div>
					}
				/>
			</Routes>
			<Footer />
		</>
	);
}
export default App;
