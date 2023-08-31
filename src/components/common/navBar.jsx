import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

import Resume from "../../data/resume.pdf"

const NavBar = (props) => {
	const { active } = props;

	return (
		<React.Fragment>
			<div className="nav-true-bg"></div>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							<li
								className={
									active === "work"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/work">Work</Link>
							</li>
							<li
								className={
									active === "resume"
										? "nav-item active"
										: "nav-item"
								}
							>
								<a href={Resume}>Resume</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
