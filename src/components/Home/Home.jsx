import PersonPage from "../Person/PersonPage";
import Experience from "../Experience/Experience";
import Contacts from "../Contacts/Contacts";
import Pastlives from "../PastLive/Pastlives";
const Home = () => {
	return (
		<>
			<PersonPage />
			<Experience />
			<Pastlives />
			<Contacts />
		</>
	);
};

export default Home;
