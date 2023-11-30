import "./css/Footer.css";
import { Instagram, Email, GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<>
			<footer className="py-[2.2em] md:pl-[0.9em] md:pb-[13em]   rounded-sm footer">
				<div className="container">
					<div className="footer-content flex flex-col pl-[0.8em] md:flex-row md:justify-between gap-10">
						<div className="footer-left">
							<h2 className="footer-left-text">Адрес</h2>
							<p className="footer-left-text">Таджикистан | Tajikistan.</p>
							<p className="footer-left-text">Душанбе | Dushanbe.</p>
						</div>
						<div className="footer-center">
							<h2 className="footer-center-text">ССЫЛКИ</h2>
							<p className="footer-center-text">
								Обо мне |{" "}
								<Link to="/Experience" className="footer-center-link">
									Открыть.
								</Link>
							</p>
							<span className="footer-center-text">
								СV | <Link className="footer-center-link">Скачать.</Link>
							</span>
						</div>
						<div className="footer-right">
							<h2 className="footer-right-text">Социальные сети</h2>
							<p className="footer-right-text">
								Instagram |{" "}
								<Link className="footer-center-link" target="_blank">
									{" "}
									<Instagram />{" "}
								</Link>
							</p>
							<p className="footer-right-text">
								GitHub |{" "}
								<Link
									to="https://github.com/Komil-Muminov"
									target="_blank"
									className="footer-center-link"
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
