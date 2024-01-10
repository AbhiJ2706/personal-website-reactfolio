import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Works from "../components/homepage/works";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/work.css";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const WorkExperience = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "work");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Work Experience | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="work" />
				<div className="content-wrapper">
					<div className="work-exp-logo-container">
						<div className="work-exp-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="work-exp-container">
						<div className="title work-exp-title">
							Work Experience
						</div>

						<div className="subtitle work-exp-subtitle">
							I bring creativity and research skills to any role. 
							I consider many possible solutions for any given problem, weighing as many 
							different factors as I can, adapting to various engineering constraints 
							and spending ample time prototyping. I extract performance through clever 
							optimizations and strive to write simple, readable code wherever possible. I take 
							deep interest in the organizations I work for, and take on 
							multiple roles/projects as I become more accustomed to my environment!
						</div>

						<div className="work-exp-list">
							<Works short={false} list={INFO.work} title={"Work Experience"} icon={faBriefcase} />
						</div>

						<div className="work-volunteering-list">
							<Works short={false} list={INFO.extracurriculars} title={"Extracurriculars/Volunteering Experience"} icon={faBriefcase} />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default WorkExperience;
