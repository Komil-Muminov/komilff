import "./css/Footer.css";
import { Instagram, GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="container">
					<div className="footer-content text-center flex flex-col  gap-10 ">
						<div className="footer-left flex flex-col">
							<h2 aria-label="Адрес" className="footer-left-text">
								Адрес
							</h2>
							<p aria-label="Tajikistan" className="footer-left-text">
								Таджикистан | Tajikistan.
							</p>
							<p className="footer-left-text">Душанбе | Dushanbe.</p>
						</div>
						<div className="footer-center flex flex-col">
							<h2 aria-label="Загаловок ссылки" className="footer-center-text">
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
							<h2 className="footer-right-text">Социальные сети</h2>
							<div className="social__icons">
								<Link
									aria-label="Ссылка на инстаграм"
									to="https://www.instagram.com/komilff"
									target="_blank"
									rel="noopener noreferrer"
									className="footer-right-link"
								>
									{" "}
									<Instagram />{" "}
								</Link>

								<Link
									aria-label="Ссылка на гитхаб"
									to="https://github.com/Komil-Muminov"
									target="_blank"
									rel="noopener noreferrer"
									className="footer-right-link"
								>
									<GitHub />
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
