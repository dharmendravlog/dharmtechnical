//#56
/* 
import React from "react";

const About = () => {
    return <h1>Hello, I am a About Page</h1>;
};

export default About;

//#58
import React from "react";
import { useEffect } from "react";

const About = (props) => {
    return <h1>Hello, I am a {props.name} Page</h1>;
};

export default About;

//# 63 64
import React from "react";
import { useEffect } from "react";

const About = (props) => {
    return (
        <>
            <div className="setStyle3">
                <h1>{props.name} page</h1>
                <p>Welcome to my world</p>
            </div>
        </>
    );
};

export default About;
*/

//#67
import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Images/logo.jpeg";
import Common from "./Common";

const About = () => {
    return (
        <>
            <Common
                name="Welcome to About page"
                imgsrc={web}
                visit="/contact"
                btname="Contact Now"

            />
        </>
    );
};

export default About;