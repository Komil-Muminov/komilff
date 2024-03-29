import "./css/navigation.css";
import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Logo from "./img/logo.png";
import { useState } from "react";

const Navigation = () => {
	const [isMobile, setIsMobile] = useState(false);
	return (
		<>
			<header className="hidden md:block pt-[2em] pb-[3.4em]">
				<div className="container flex flex-wrap flex-col justify-center items-center md:flex-row">
					<Link
						to="/Home"
						className="flex flex-col  md:flex md:flex-row  min-w-max"
					>
						<img src={Logo} alt="Logo" className=" inline-block md:mr-[18em]" />
					</Link>
					<nav className="links flex flex-wrap gap-[4em] justify-center items-center">
						<Link className="nav-link pc-links" to="/Home">
							HOME
						</Link>
						<Link className="nav-link pc-links" to="/PersonPage">
							ME
						</Link>
						<Link className="nav-link pc-links" to="/Family">
							Family
						</Link>
						<Link className="nav-link pc-links" to="/Contacts">
							CONTACTS
						</Link>
					</nav>
				</div>
			</header>

			<span
				onClick={() => setIsMobile(!isMobile)}
				className="flex justify-end items-center md:hidden p-1"
			>
				<Menu className="isMobile-icon" />
			</span>

			{isMobile && (
				<header data-aos="fade-left" className="sections  pt-0 pb-0">
					<div className="container isMobile-container">
						<nav className="links flex flex-wrap flex-col gap-[1em] justify-center items-center">
							<Link className="nav-link mobile-links" to="/Home">
								HOME
							</Link>
							<Link className="nav-link mobile-links" to="/PersonPage">
								PERSON PAGE
							</Link>
							<Link className="nav-link mobile-links" to="/Family">
								Family
							</Link>
							<Link className="nav-link mobile-links" to="/Contacts">
								CONTACTS
							</Link>
						</nav>
					</div>
				</header>
			)}
		</>
	);
};

export default Navigation;
