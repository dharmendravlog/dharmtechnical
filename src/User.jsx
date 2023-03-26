//#59
/*import React from "react";
import { useParams } from "react-router-dom";


//const User = (match) => {
//   return <h1> user {match.params.fname} page </h1>;
//};

const User = () => {
    const { fname, lname } = useParams();
    return (
        <h1>
            user {fname} {lname} page
        </h1>
    );
};

export default User;

//#60 uselocation hooks
import React from "react";
import { useLocation, useParams } from "react-router-dom"

const User = () => {
    const { fname, lname } = useParams();
    const location = useLocation();
  console.log(location);

    return (
        <>
            <h1>
                user {fname} {lname} page
            </h1>
            <p> My current location is {location.pathname}</p>
            {location.pathname === `/user/dharm/singh` ? (
                <button onClick={() => alert(`you are awesome`)}>Click me</button>
            ) : null}


        </>
    );
};

export default User;*/

//#61 useHistory hooks replaced by useNavigate

import React from "react";
import {  useLocation, useNavigate, useParams } from "react-router-dom"

const User = () => {
    const { fname, lname } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(navigate);

    //history.push("/path")   navigate("/path")
    //history.replace("/path") navigate("/path",{replace:true})

    return (
        <>
            <h1>
                user {fname} {lname} page
            </h1>
            <p> My current location is {location.pathname}</p>
            {location.pathname === `/user/dharm/singh` ? (
                <button onClick={() => navigate("/")}> home page</button>
            ) : null}


        </>
    );
};

export default User;

