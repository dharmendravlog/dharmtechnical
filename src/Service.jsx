/*
//#58 1
import React from "react";

const Service = () => {
           return <h1>Hello, I am Service Page</h1>;

};

export default Service;

//#58 2
import React from "react";
import { useEffect } from "react";

const Service = (props) => {
           return <h1>Hello, I am a {props.name} Page</h1>;

};

export default Service;

//#67 1
import React from "react";

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Our Services </h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row ">
                            <div className="col-md-4 col-10 mx-auto">

                                <div class="card">
                                    <img src="" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">
                                            Go somewhere </a>
                                    </div>
                                </div>

                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;*/

//#67 2
import React from "react";
import Sdata from "./Sdata";
import Card from "./Cards";

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Our Services </h1>
            </div>

            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {/* < Card />*/}
                            {
                                Sdata.map((val, ind) => {
                                    return <Card key={ind}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                    />
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;