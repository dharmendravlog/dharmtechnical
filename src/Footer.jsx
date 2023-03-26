/*
import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer>
                <p>copyright © {year}</p>
            </footer>
        </>
    );
};

export default Footer;*/

//#67
import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="w-100bg-light text-center">
                <p>copyright © {year} DharmTechnical. All Rights Reserved | Terms and Conditions</p>
            </footer>
        </>
    );
};

export default Footer;
