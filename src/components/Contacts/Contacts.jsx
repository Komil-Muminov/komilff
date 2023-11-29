import "./css/Contacts.css";
const Contacts = () => {
	return (
		<>
			<section className="sections experience-section ">
				<div className="container">
					<h2 className="sections-title flex justify-center items-center mb-[34px] md:pl-[10%]">
						КОНТАКТЫ
					</h2>
					<div className="text-wrapper flex flex-col justify-center items-center px-4 ">
						<p className="sections-desc mb-[15px]">
							Пишите мне на почту:{" "}
							<strong>
								<a
									href="mailto:kmuminov0104@gmail.com"
									className="contacts-email"
									target="_blank"
								>
									kmuminov0104@gmail.com
								</a>
							</strong>
						</p>

						<p className="sections-desc">
							<strong>
								<a
									href="https://docs.google.com/forms/d/1cM2UPm14NBZQb1yHDaP6KbOWIvEiE0gMrB5wAeww81M/edit"
									className="contacts-google-form"
									target="_blank"
								>
									Пишите мне через Гугл-формы:{" "}
								</a>
							</strong>
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contacts;
