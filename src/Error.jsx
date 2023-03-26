/*
import React from "react";

const Error = () => {
    return <h1>oops! Page not found!</h1>;
};

export default Error;*/

//#64
import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <>
            <div className="setStyle4">
                <h1> 404 Error Page </h1>
                <p> Sorry, This page does'nt exits </p>
                <NavLink to="/"> Go Back</NavLink>
            </div>
        </>
    );
};

export default Error;