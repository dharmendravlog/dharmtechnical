import React from "react";
const SlotM = (props) => {
    //let x = "ICON";
    //let y = "ICON";
    //let z = "ICON";

    //let x=props.x;
    //let y=props.y;
    //let z=props.z; in place use object destructure 

    let { x, y, z } = props;

    if ( (x === y && y === z) ) {
        return(
            <>
                <div className="slot_innner">
                    <h1>
                        {x} {y} {z}
                    </h1>
                    <h1> This is Matching.</h1>
                    <hr />
                </div>
            </>
        );
    } else{
        return(
            <>
                <div className="slot_innner">
                    <h1>
                        {x} {y} {z}
                    </h1>
                    <h1> This is not Matching.</h1>
                    <hr />
                </div>
            </>
        );
    }
};

export default SlotM;