import PersonPage from "../Person/PersonPage";
import Family from "../Family/Family";
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
			{/* <ToastContainer autoClose={1000} position="top-left" /> */}
			<PersonPage />
			<Family />
			<Pastlives />
			<Contacts />
		</>
	);
};

export default Home;
