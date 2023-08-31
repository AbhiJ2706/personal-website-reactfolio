import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

import PFP from "../../img/logo.jpg"

import "./styles/logo.css";

const Logo = (props) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		<img src={PFP} alt="logo" className="logo" width={width} />
	);

	return (
		<React.Fragment>
			{link ? <Link to="/personal-website-reactfolio">{imageElement}</Link> : imageElement}
		</React.Fragment>
	);
};

export default Logo;
