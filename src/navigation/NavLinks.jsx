import "./css/navigation.css";
import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Logo from "./img/logo.png";
import { useState } from "react";

const NavLinks = () => {
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
							PERSON PAGE
						</Link>
						<Link className="nav-link pc-links" to="/Experience">
							EXPERIENCE
						</Link>
						<Link className="nav-link pc-links" to="/Contacts">
							CONTACTS
						</Link>
					</nav>
				</div>
			</header>

			<span
				onClick={() => setIsMobile(!isMobile)}
				className="flex justify-end items-center p-[1.7em] md:hidden"
			>
				<Menu className="isMobile-icon" />
			</span>

			{isMobile && (
				<header data-aos="fade-left" className="sections">
					<div className="container isMobile-container">
						<nav className="links flex flex-wrap flex-col gap-[1em] justify-center items-center">
							<Link className="nav-link mobile-links" to="/Home">
								HOME
							</Link>
							<Link className="nav-link mobile-links" to="/PersonPage">
								PERSON PAGE
							</Link>
							<Link className="nav-link mobile-links" to="/Experience">
								EXPERIENCE
							</Link>
							<Link className="nav-link mobile-links" to="/Contacts">
								CONTACTS
							</Link>
						</nav>
					</div>
				</header>
			)}

			{/* <div className="flex justify-c items-center pr-3 md:hidden  pb-[3.4em]">
				<span onClick={() => setIsMobile(!isMobile)} className="isMobile">
					<Menu />
				</span>
				{isMobile && (
					<div data-aos="fade-left" className="container pb-[3.4em]">
						<div className="flex flex-col md:flex-row">
							<Link
								to="/Home"
								className="flex flex-col items-center justify-center min-w-max"
							>
								<img src={Logo} alt="Logo" className="h-[5em] w-[5em]" />
							</Link>
							<nav className="links flex flex-wrap flex-col gap-[1em] justify-center items-center">
								<Link to="/Home">HOME</Link>
								<Link to="/PersonPage">PERSON PAGE</Link>
								<Link to="/Experience">EXPERIENCE</Link>
								<Link to="/Contacts">CONTACTS</Link>
							</nav>
						</div>
					</div>
				)}
			</div> */}
		</>
	);
};

export default NavLinks;
