import PersonPage from "../Person/PersonPage";
import Experience from "../Experience/Family";
import Contacts from "../Contacts/Contacts";
import Pastlives from "../PastLive/Pastlives";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
const Home = () => {
	useEffect(() => {
		toast.success("Главная страница");
	});
	return (
		<>
			<ToastContainer autoClose={1000} position="top-left" />
			<PersonPage />
			<Experience />
			<Pastlives />
			<Contacts />
		</>
	);
};

export default Home;
