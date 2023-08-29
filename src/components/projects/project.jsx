import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCircle } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const progressToColor = {
	"Just started": "#ff0000",
	"In progress": "#ffff00",
	"Complete": "#00ff00"
}

const Project = (props) => {
	const { logo, title, description, linkText, link, progressText } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-progress">
							<div className="project-progress-icon">
								<FontAwesomeIcon icon={faCircle} style={{color: progressToColor[progressText]}} />
							</div>

							<div className="project-progress-text" style={{color: progressToColor[progressText]}}>{progressText}</div>
						</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
