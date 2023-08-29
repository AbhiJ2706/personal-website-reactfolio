import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import Work from "../common/work";

import INFO from "../../data/user";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						{INFO.work.map((job, index) => (
							<Work 
								logo={job.logo}
								title={job.title}
								subtitle={job.subtitle}
								duration={job.duration}
								long={""}
							/>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
