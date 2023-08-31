import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = (props) => {
	const { short } = props;
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (short && index >= 6 ? null : (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
						progressText={project.progressText}
						color={project.color}
					/>
				</div>
			)))}
		</div>
	);
};

export default AllProjects;
