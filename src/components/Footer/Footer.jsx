import "./css/Footer.css";
import { Instagram, GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<footer className="py-[2.2em] md:pl-[0.9em] md:pb-[13em]   rounded-sm footer">
				<div className="container">
					<div className="footer-content text-center flex flex-col  md:flex-row md:justify-between gap-10 ">
						<div className="footer-left flex flex-col">
							<h2 className="footer-left-text">Адрес</h2>
							<p className="footer-left-text">Таджикистан | Tajikistan.</p>
							<p className="footer-left-text">Душанбе | Dushanbe.</p>
						</div>
						<div className="footer-center flex flex-col">
							<h2 className="footer-center-text">ССЫЛКИ</h2>

							<Link to="/Experience" className="footer-center-link">
								Обо мне | Открыть
							</Link>
							<span className="footer-center-text flex flex-col">
								<Link className="footer-center-link">СV | Скачать.</Link>
							</span>
						</div>
						<div className="footer-right">
							<h2 className="footer-right-text">Социальные сети</h2>
							Instagram |{" "}
							<Link
								to="https://www.instagram.com/komilff"
								target="_blank"
								rel="noopener noreferrer"
								className="footer-right-link"
							>
								{" "}
								<Instagram />{" "}
							</Link>
							<p className="footer-right-text">
								GitHub |{" "}
								<Link
									to="https://github.com/Komil-Muminov"
									target="_blank"
									rel="noopener noreferrer"
									className="footer-right-link"
								>
									<GitHub />
								</Link>
							</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
export default Footer;
