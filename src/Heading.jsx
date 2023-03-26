// component
/*import React from "react";

function Heading(){
    return <h1> My name is dharm</h1>
}

export default Heading;*/


import React from "react";
const Heading = (props) => {
return <h3 className="card_title">{props.sname}</h3>;
};
export default Heading;