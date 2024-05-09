import React from "react";

import "../homepage/styles/works.css";

import UWDSC from "../../img/uwdsc.png"
import TOHacks from "../../img/tohacks.png"
import WATai from "../../img/watai.jpg"
import UW from "../../img/uw.png"
import UWRL from "../../img/uwrl.jpg"

const Work = (props) => {
    const { logo, title, subtitle, duration, long } = props;

    return (<div className={long == "" ? "work-small" : "work-big"}>
        <img
            src={logo == "uwdsc" ? UWDSC : (logo == "tohacks" ? TOHacks : (logo == "watai" ? WATai : (logo == "uw" ? UW : (logo == "uwrl" ? UWRL : logo))))}
            alt={title}
            className="work-image"
        />
        <div className="work-title">{title}</div>
        <div className="work-subtitle">
            {subtitle}
        </div>
        <div className="work-duration">{duration}</div>
        <div className="work-long">{long}</div>
    </div>)
};

export default Work;
