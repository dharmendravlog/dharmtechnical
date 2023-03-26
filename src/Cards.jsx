/*
import React from "react";

function Card(props) {
  // console.log(props);
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="myPic" className="card_img" />
          <div className="card_info">
            <span className="card_category"> {props.title} </span>
            <h3 className="card_title">{props.sname}</h3>
            <a href={props.link} target="_blank">

              <button> Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;

//#25
import React from "react";
import Heading from "./Heading";
import Images from "./Images";

function Card(props) {
  // console.log(props);
  return (
    <>
      <div className="cards">
        <div className="card">

          <Images imgsrc={props.imgsrc} />
          <div className="card_info">
            <span className="card_category"> {props.title} </span>

            <Heading sname={props.sname} />
            <a href={props.link} target="_blank">

              <button> Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;*/

//#67
import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Images/s1.jpg";

const Card = (props) => {
  return (
    <>

      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt="imgsrc" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink to="" className="btn btn-primary">
              Go somewhere </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;