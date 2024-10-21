import React, { useEffect, Component } from "react";
import { Helmet } from "react-helmet";

import INFO from "../data/user";
import SEO from "../data/seo";

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
            <></>
        );
    }
};

export default Resume;
