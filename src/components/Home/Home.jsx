import PersonPage from "../Person/PersonPage";
import Experience from "../Experience/Experience";
import Contacts from "../Contacts/Contacts";
import Pastlives from "../PastLive/Pastlives";
import Navigation from "../../navigation/Navigation";
// import Products from "../Products/Products";
const Home = () => {
	return (
		<>
			<Navigation />
			<PersonPage />
			<Experience />
			<Pastlives />
			<Contacts />
		</>
	);
};

export default Home;
