import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

import Resume from "../../data/resume.pdf"

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">Projects</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/work">Work/Volunteering</Link>
						</li>
						<li className="footer-nav-link-item">
							<a href={Resume}>Resume</a>
						</li>
						<li className="footer-nav-link-item">
							<a>Deployment #8</a>
						</li>
					</ul>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
