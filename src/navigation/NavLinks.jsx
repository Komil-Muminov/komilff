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
					<a href="#" className="flex flex-col  md:flex md:flex-row  min-w-max">
						<img src={Logo} alt="Logo" className=" inline-block md:mr-[18em]" />
					</a>
					<nav className="links flex flex-wrap gap-[4em] justify-center items-center">
						<Link to="/Home">HOME</Link>
						<Link to="/PersonPage">PERSON PAGE</Link>
						<Link to="/Experience">EXPERIENCE</Link>
						<Link to="/Contacts">CONTACTS</Link>
					</nav>
				</div>
			</header>

			<div className="block md:hidden">
				<span onClick={() => setIsMobile(!isMobile)} className="isMobile">
					<Menu />
				</span>
				{isMobile && (
					<div data-aos="fade-right" className="container">
						<header className=" pt-[2em] pb-[3.4em]">
							<div className="container flex flex-col md:flex-row">
								<a
									href="#"
									className="flex flex-col items-center justify-center min-w-max"
								>
									<img src={Logo} alt="Logo" className="h-[5em] w-[5em]" />
								</a>
								<nav className="links flex flex-wrap flex-col gap-[1em] justify-center items-center">
									<Link to="/Home">HOME</Link>
									<Link to="/PersonPage">PERSON PAGE</Link>
									<Link to="/Experience">EXPERIENCE</Link>
									<Link to="/Contacts">CONTACTS</Link>
								</nav>
							</div>
						</header>
					</div>
				)}
			</div>
		</>
	);
};

export default NavLinks;
