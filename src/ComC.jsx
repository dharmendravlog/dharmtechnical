import React from "react";
import { FirstName, LastName } from "./App.jsx"

const ComC = () => {             //consumer hmesha ek function ko xpect krta hai directly component use nhi hota isliye h1 use mhi kiya direct
    return (
        <>
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return (
                                    < h1 > My name is {fname} {lname}
                                    </h1>
                                );
                            }}
                        </LastName.Consumer>
                    );
                }}
            </FirstName.Consumer>
        </>
    );

};

export default ComC;