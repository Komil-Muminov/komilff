import React from "react";
import { Link } from "react-router-dom";
import "./css/navigation.css";
const NavLinks = () => {
	return (
		<>
			<header className="header-section">
				<div className="container flex justify-center items-center gap-64">
					<img src="src\navigation\img\logo.png" alt=" log" />
					<nav className="nav flex justify-between items-center">
						<ul className="nav__list flex  gap-[71px]">
							<li className="nav__item">
								<a href="#" className="nav__link">
									HOME
								</a>
							</li>
							<li className="nav__item">
								<a href="#" className="nav__link">
									HOME
								</a>
							</li>
							<li className="nav__item">
								<a href="#" className="nav__link">
									HOME
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
};

export default NavLinks;
