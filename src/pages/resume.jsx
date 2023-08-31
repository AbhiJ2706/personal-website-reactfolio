import React, { useEffect, Component } from "react";
import { Helmet } from "react-helmet";

import INFO from "../data/user";
import SEO from "../data/seo";

import RESUME from "../data/resume.pdf"

class Resume extends Component {
    constructor(props) {
        super(props)
    
        this.button = React.createRef()
    }
    
    componentDidMount() {
        this.button.current.click()
    }

    render() {
        return (
            <a ref={this.button} href={RESUME}>Resume</a>
        );
    }
};

export default Resume;
