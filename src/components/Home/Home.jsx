import PersonPage from "../Person/PersonPage";
import Experience from "../Experience/Experience";
import Contacts from "../Contacts/Contacts";
const Home = () => {
	return (
		<>
			<div className="container">
				<PersonPage />
				<Experience />
				<Contacts />
			</div>
		</>
	);
};

export default Home;
