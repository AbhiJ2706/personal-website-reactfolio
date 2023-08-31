import React from "react";

import Card from "../common/card";
import Work from "../common/work";

import "./styles/works.css";

const Works = (props) => {

	const { short, list, title, icon } = props;

	return (
		<div className="works">
			<Card
				icon={icon}
				title={title}
				body={
					<div className="works-body">
						{list.map((job, index) => (
							<Work 
								logo={job.logo}
								title={job.title}
								subtitle={job.subtitle}
								duration={job.duration}
								long={short ? "" : job.long}
							/>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
