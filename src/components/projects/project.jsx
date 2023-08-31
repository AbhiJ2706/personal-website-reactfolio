import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCircle } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const progressToColor = {
	"Just started": "project-just-started",
	"In progress": "project-in-progress",
	"Complete": "project-complete"
}

const Project = (props) => {
	const { logo, title, description, linkText, link, progressText, color } = props;

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
						<div className="project-status-container">
							<div className={progressToColor[progressText]}>
								<div className="project-progress-icon">
									<FontAwesomeIcon icon={faCircle} />
								</div>

								<div className="project-progress-text">{progressText}</div>
							</div>
							<div className="project-link">
								<div className="project-link-icon">
									<FontAwesomeIcon icon={faLink} />
								</div>

								<div className="project-link-text">{linkText}</div>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
