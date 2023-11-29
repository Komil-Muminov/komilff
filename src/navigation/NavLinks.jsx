import React from "react";
import { Link } from "react-router-dom";
import "./css/navigation.css";
import Logo from "./img/logo.png";

const NavLinks = () => {
	return (
		<header className="sections">
			<div className="container flex flex-wrap flex-col justify-center items-center md:flex-row">
				<a href="#" className="flex flex-col  md:flex md:flex-row  min-w-max">
					<img src={Logo} alt="Logo" className=" inline-block md:mr-[256px]" />
				</a>
				<nav className="links flex flex-wrap gap-[71px] justify-center items-center">
					<Link to="/Home">HOME</Link>
					<Link to="/PersonPage">PersonPage</Link>
					<Link to="/Experience">Experience</Link>
					<Link to="/Contacts">Contacts</Link>
				</nav>
			</div>
		</header>
	);
};

export default NavLinks;
