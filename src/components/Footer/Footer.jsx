import "./css/Footer.css";
import { Instagram, Facebook } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="container">
					<div className="footer-content text-center flex flex-col  gap-10 ">
						<div className="footer-left flex flex-col">
							<h2
								aria-label="Адрес"
								className="text-xl footer-left-text mb-2 md:mb-5"
							>
								Адрес
							</h2>
							<Link
								aria-label="Tajikistan"
								className="text-md footer-left-text footer-center-link"
							>
								Таджикистан | Tajikistan.
							</Link>
							<Link
								target="_blank"
								to="https://maps.app.goo.gl/P1VCQeZjp1nQxfic7"
								className="text-md footer-left-text footer-center-link"
							>
								Душанбе | Dushanbe.
							</Link>
						</div>
						<div className="footer-center flex flex-col">
							<h2
								aria-label="Загаловок ссылки"
								className="text-xl footer-center-text mb-2 md:mb-5"
							>
								ССЫЛКИ
							</h2>

							<Link
								aria-label="файл обо мне"
								to="/Experience"
								className="footer-center-link"
							>
								Обо мне | Открыть
							</Link>
							<span className="footer-center-text flex flex-col">
								<Link
									aria-label="Скачать резьюме"
									className="footer-center-link"
								>
									СV | Скачать.
								</Link>
							</span>
						</div>
						<div className="footer-right">
							<h2 className="text-xl footer-right-text mb-2 md:mb-5">
								Социальные сети
							</h2>
							<div className="social__icons">
								<Link
									aria-label="Ссылка на инстаграм"
									to="https://www.instagram.com/komilff"
									target="_blank"
									rel="noopener noreferrer"
									className="footer-right-link"
								>
									{" "}
									<Instagram sx={{ fontSize: "3rem" }} />{" "}
								</Link>

								<Link
									aria-label="Ссылка на гитхаб"
									to="https://www.facebook.com/profile.php?id=100011337580298&mibextid=ZbWKwL"
									target="_blank"
									rel="noopener noreferrer"
									className="footer-right-link"
								>
									<Facebook sx={{ fontSize: "3rem" }} />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
export default Footer;
