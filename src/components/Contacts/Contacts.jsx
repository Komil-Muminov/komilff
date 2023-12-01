import "./css/Contacts.css";
import { Link } from "react-router-dom";
const Contacts = () => {
	return (
		<>
			<section className="sections experience-section ">
				<div className="container">
					<h2 className="sections-title text-center mb-[1.5em]">Контакты</h2>
					<div className="contacts-wrapper flex flex-col gap-5 justify-center items-center  ">
						<Link
							target="_blank"
							to="https://docs.google.com/forms/d/1cM2UPm14NBZQb1yHDaP6KbOWIvEiE0gMrB5wAeww81M/edit"
							className="max-w-[10em] contacts-text"
						>
							Гугл Формы
						</Link>
						<Link
							target="_blank"
							to="mailto:kmuminov0104@gmail.com"
							className="max-w-[10em] contacts-text"
						>
							GMAIL
						</Link>
						<Link
							target="_blank"
							to="https://www.instagram.com/komilff/"
							className="max-w-[10em] contacts-text"
						>
							INSTAGRAM
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contacts;
