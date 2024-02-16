import "./css/Contacts.css";
import { Link } from "react-router-dom";
const Contacts = () => {
	return (
		<>
			<section className="sections experience-section ">
				<div className="container">
					<h2 className="sections-title text-center mb-[1.5em]">Контакты</h2>
					<div className="contacts__content flex flex-wrap  gap-5 justify-center items-center  ">
						<Link
							target="_blank"
							aria-label="Ссылка на инстаграм"
							to="https://www.instagram.com/komilff/"
							className="w-full md:max-w-[10em] contacts-text"
						>
							INSTAGRAM
						</Link>

						<Link
							target="_blank"
							aria-label="Ссылка на ГуглФормы"
							to="https://docs.google.com/forms/d/1cM2UPm14NBZQb1yHDaP6KbOWIvEiE0gMrB5wAeww81M/edit"
							className="w-full md:max-w-[10em] contacts-text"
						>
							GoogleForms
						</Link>
						<Link
							aria-label="Ссылка на Gmail"
							target="_blank"
							to="mailto:kmuminov0104@gmail.com"
							className=" w-full md:max-w-[10em] contacts-text"
						>
							GMAIL
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contacts;
