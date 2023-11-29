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
					<a href="#" className="header-link">
						HOME
					</a>
					<a href="#" className="header-link">
						ABOUT
					</a>
					<a href="#" className="header-link">
						CONTACTS
					</a>
				</nav>
			</div>
		</header>
	);
};

export default NavLinks;
