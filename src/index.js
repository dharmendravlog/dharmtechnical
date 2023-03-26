/*
//#4
1. Install Node.js and NPM       google per   nodejs    Node.js org    lts
in cmd     >node -v 
           >npm -v
2. Install Vs Code
3. Install React terminal
   a. npm install-g create-react-app
   b. create-react-app --version
      c:Users\dell>d:
      d:\>mkdir reacttut
      d:\>cd reacttut
      d:\reacttut>creact-react-app awesomeapp

      npm start

   c. create-react-app <projectname>

//#5
var React = require("react");
var ReactDOM = require("react-dom");

//ReactDOM.render("kya dikhana hai",   "kaha dikhana hai",   "callback function");              
// javascript ki help se koi bhi id ko excess krna hoto DOM ka use krte hai  
// react ke under ham javascript ke dom manipulation and updation ka us kr sake 
//uske use krne ke liye hame react-dom module ka use krna pdta hai 

ReactDOM.render(<h1>Hello World!!</h1>, document.getElementById("root"));

*/
//#6
/*import React from "react";
import ReactDom from "react-dom";
ReactDom.render( <h1>Dharm Technical !!</h1>, document.getElementById("root"));
                     //kya dikhana hai              ,  kha dikhana hai


//babel compiler react pure code
ReactDom.render(
  React.createElement("h1",
 null,
 "Dharmendra Technical  !!"),
 document.getElementById("root"));*/

//pure javascript
//var h1 = document.createElement("h1");
//h1.innerHTML = "Dharmendra Technical Subscribe !!";
//document.getElementById("root").appendChild(h1);

/*
  //#7
import React from "react";
import ReactDOM  from "react-dom";
  ReactDOM.render(   //render methods need only one element for use multiple jsx element use div element
                     //if do not use div use array of element when react version up to 16.xxx
                     //const arr = [ <h1></h1>,<p></p>,<h2></h2>7]
                     //react in place of <div> use array
    <div>
      <h1>Dharmendra Techincal</h1>         
      <p> plz like and sare</p>
      <h2> plz subscribe my chanel</h2>
    </div>,
    document.getElementById("root")
  );

  
  //#8 React.Fragment
  import React from "react";
import ReactDOM  from "react-dom";
  ReactDOM.render(                        // use in place of react.Fragmentfor react v16.xx <>  </>
    <React.Fragment>
      <h1>Dharmendra Techincal</h1>         
      <p> plz like and sare</p>
      <h2> plz subscribe my chanel</h2>
    </React.Fragment>,
    document.getElementById("root")
  );
//#9
import React from "react";
import ReactDOM  from "react-dom";

ReactDOM.render(
  <>
    <h1> Dharmendra Technical Netflix Pick</h1>
    <p>Here the list of my fav 5 netflix series</p>
    <ol>
      <li>Dark</li>
      <li>Extra curricular</li>
      <li>My Holo Love</li>
      <li>My first-2 love</li>
      <li>Mr Robot</li>
    </ol>
  </>,
  document.getElementById("root")
);

//#10 javascricpt me html ka use krne ke liye jsx ka use krte hai or usi ke under phir se java script ka
      // use krne ke liye ke liye pair of {} ka use krte hai
import React from "react";
import ReactDOM from "react-dom";
const flname = " dharmendra thakur";
     
   //javascript ke under html and them html ke under javascript use pair of curlibrackets
ReactDOM.render(
  <>
  <h1>my name is {flname}</h1>,
  <p> mu lucky number is {Math.random()} </p>
  </>,
  // curlibracket ke under expression use kr skte hai statement use nhi hoge
  document.getElementById("root")
);

//#11
import React from "react";
import ReactDOM from "react-dom";
const fname = "dharmendra";
const lname = "thakur";

ReactDOM.render(
<>
  <h1> my name is {fname} {lname}</h1> 
  <h2> my name is {fname + lname}</h2> //concatting
  <h1> my name is {fname + " " + lname}</h1>
</>,
document.getElementById("root")
);

//template literals use ``
import React from "react";
import ReactDOM from "react-dom";
const fname = "dharmendra";
const lname = "thakur"; 

ReactDOM.render(
  <>
    <h1> my name is {`${fname} ${lname}`}</h1>  
    <h2> {`my name is ${fname} ${lname}`}</h2>
    <p>my lucky number is {5+5} </p>
  </>,
  document.getElementById("root")
);

//jsx chall 2 #12
import React from "react";
import ReactDOM from "react-dom";
const name = "dharm";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
ReactDOM.render(
  <>
 <h1>Hello, My name is {name}</h1>
 <p> Current Date is ={currDate} </p>
 <p> Current Time is ={currTime} </p>
 </>,
 document.getElementById("root")
);

//#13 jsx attributes in React
import React from "react";
import ReactDOM from "react-dom";
const name = "dharm";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links ="https://www.thapatechnical.com/";

ReactDOM.render(
  <>
<h1 contentEditable="true"> My name is {name}</h1>
<img src="https://picsum.photos/200/300"alt="randomImages" />
<img src={img2} alt="randomImages"/>
<a href={links} target="_thapa">
<img src={img3} alt="randomImages"/>
</a>
</>,
document.getElementById("root")
);

//#14 style
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const name = "dharm";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links ="https://www.thapatechnical.com/";

ReactDOM.render(
  <>
<h1 className="heading"> My name is {name}</h1>
<div className="img_div">
<img src="https://picsum.photos/200/300"alt="randomImages" />
<img src={img2} alt="randomImages"/>
<a href={links} target="_thapa">
<img src={img3} alt="randomImages"/>
</a>
</div>
</>,
document.getElementById("root")
);

//#15 Add google font in reactjs //external css
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const name = "dharm";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links ="https://www.thapatechnical.com/";

ReactDOM.render(
  <>
<h1 className="heading"> My name is {name}</h1>
<div className="img_div">
<img src="https://picsum.photos/200/300"alt="randomImages" />
<img src={img2} alt="randomImages"/>
<a href={links} target="_thapa">
<img src={img3} alt="randomImages"/>
</a>
</div>
</>,
document.getElementById("root")
);

//16 inline css & internal css
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const name = "dharm";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links ="https://www.thapatechnical.com/";

const heading = {
  //  key : "value" isme value ek string hoti hai isliye ye single ya double code ME HOGA
      color: "#fa9191",
      textTransform: "capitalize",
      textAlign: "center",
      fontWeight: "bold",
      textShadow: "0px 2px 4px #ffe9c5",
      margin: "70px 0",
      fontFamily: '"Josefin Sans",sans-serif'
}

ReactDOM.render(
  <>
<h1 style= {{color: "#fa9191",textTransform: "capitalize",textAlign: "center"}}> My name is {name}</h1>
<h1 style={heading}> My name is {name}</h1>
<div className="img_div">
<img src="https://picsum.photos/200/300"alt="randomImages" />
<img src={img2} alt="randomImages"/>
<a href={links} target="_thapa">
<img src={img3} alt="randomImages"/>
</a>
</div>
</>,
document.getElementById("root")
);

//#17   mini-project chall3
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// new Date(year, month, day, hours, minutes, seconds, milliseconds)
let curDate = new Date();   //new Date(2020,5,5,10);
curDate = curDate.getHours();
let greeting = "";
const cssStyle = {};

if (curDate >= 1 && curDate < 12) { greeting = "Good Morning"; cssStyle.color = "green"; }
else if (curDate >= 12 && curDate < 19) { greeting = "Good Afternoon"; cssStyle.color = "orange"; }
else { greeting = "Good Night"; cssStyle.color = "black"; }

ReactDOM.render(
  <>
    <div>
      <h1>Hello Sir, <span style={cssStyle}> {greeting}</span></h1>
    </div>
  </>,
  document.getElementById("root")
);


//#18 without diff jsx component
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <>
    <h1> My name is dharm</h1>
    <p> This is my world</p>
    <ol>
      <li>dharm</li>
      <li>singh</li>
      <li>thakur</li>
      <li>dharm technical</li>
    </ol>
  </>,
  document.getElementById("root")

);

//#18  19
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.render(<App />,
  document.getElementById("root")
);

//#20 import export model 1
import React from "react";
import ReactDOM from "react-dom";
import youtuber from "./App.jsx";

ReactDOM.render(
<>
  <ol>
    <li>dharm</li>
    <li> {youtuber} </li> 
  </ol>
</>,
document.getElementById("root")
);

//#20 2
import React from "react";
import ReactDOM from "react-dom";
import myfav from "./App.jsx"; // export default ke karan youtuber ki space per diff word like myfav

ReactDOM.render(
  <>
    <ol>
      <li>dharm</li>
      <li> {myfav} </li>
    </ol>
  </>,
  document.getElementById("root")
);

//#20 3
import React from "react";
import ReactDOM from "react-dom";
import myfav, {favprog, myName, myNames} from "./App.jsx";
 ReactDOM.render(
  <>
    <ol>
      <li>dharm</li>
      <li> {myfav} </li>
      <li> {favprog} </li>
      <li> {myName()} </li>
      <li> {myNames()} </li>
    </ol>
  </>,
  document.getElementById("root")
);
//#20 4
import React from "react";
import ReactDOM from "react-dom";
import * as ques from "./App.jsx";  //use diff word in place ques || ass a wild card / ques ke under object ke jese milege jitne variable or function ho
 ReactDOM.render(
  <>
    <ol>
      <li>dharm</li>
      <li> {ques.default} </li>
      <li> {ques.favprog} </li>
      <li> {ques.myName()} </li>
      <li> {ques.myNames()} </li>
    </ol>
  </>,
  document.getElementById("root")
);

//#21chall5 calculator App 1
import React from "react";
import ReactDOM from "react-dom";
import { add, sub, mult, div } from "./Calc";

ReactDOM.render(
  <>
  <ul>
    <li>sum fo two number is {add(40,4)} </li>
    <li> {sub(40,4)}</li>
    <li> {mult(40,4)}</li>
    <li> {div(40,4)}</li>
  </ul>

  </>,
  document.getElementById("root")
);

//#21 2
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

ReactDOM.render(<App />, document.getElementById("root"));

//# 22   Netflix App1  1
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <>
    <div className="cards">
      <div className="card">
        <img src="https://wallpapercave.com/wp/wp4056410.jpg"
          alt="myPic"
          className="card_img" />

        <div className="card_info">
          <span className="card_category"> A Netflix original series</span>
          <h3 className="card_title">DARK</h3>
          <a href="https://www.netflix.com/in/title/80990668?source=35"
            target="_blank">

            <button> Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  </>,
  document.getElementById("root")
);
//#22 2 custom component and custom attribute //custom component and attribute ko access krne ke liye usko pass 
        // krna hoga us particular component me -- use props/ other word props me custom attribute as an object milege

import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  console.log(props);
  return (
    <>
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt="myPic" className="card_img" />

        <div className="card_info">
          <span className="card_category"> {props.title} </span>
          <h3 className="card_title">{props.sname}</h3>
          <a href={props.link}  target="_blank">

            <button> Watch Now</button>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}

ReactDOM.render(
  <>
    <Card
      imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A Netflix original series"
      sname="DARK" 
      link="https://www.netflix.com/in/title/80990668?source=35" />
    <Card 
      imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A Netflix original series"
      sname="extra curricular" 
      link="https://www.netflix.com/in/title/80990668?source=35" />
    <Card 
      imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A Netflix original series"
      sname="Stranger Things" 
      link="https://www.netflix.com/in/title/80990668?source=35" />
    
  </>,
  document.getElementById("root")

);

//#22 3 props in Reactjs
import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
//import "./index.css"

ReactDOM.render(
  <>
     <Card
      imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A Netflix original series"
      sname="DARK" 
      link="https://www.netflix.com/in/title/80990668?source=35" />
    <Card 
      imgsrc="https://img1.kpopmap.com/2020/03/extracurricular-netflix-poster-news-1.png"
      title="A Netflix original series"
      sname="extra curricular" 
      link="https://www.netflix.com/in/title/80990668?source=35" />
    <Card 
      imgsrc="https://wallpapercave.com/wp/wp1917154.jpg"
      title="A Netflix original series"
      sname="Stranger Things" 
      link="https://www.netflix.com/in/title/80990668?source=35" />
  </>,
  document.getElementById("root")
);

// #23  app 2  array of an object
import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

//console.log(Sdata[0].sname); //Card component ke under already predefind use na kre kyuki bah usko props hi smjhega

ReactDOM.render(
  <>
    <h1 className="heading_style">List of top 5 Netflix series in 2020</h1>
    <Card
      imgsrc={Sdata[0].imgscr}
      title={Sdata[0].title}
      sname={Sdata[0].sname}
      link={Sdata[0].links} />
   
   <Card
      imgsrc={Sdata[1].imgscr}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      link={Sdata[1].links} /> 
      
   <Card
      imgsrc={Sdata[2].imgscr}
      title={Sdata[2].title}
      sname={Sdata[2].sname}
      link={Sdata[2].links} />

<Card
      imgsrc={Sdata[3].imgscr}
      title={Sdata[3].title}
      sname={Sdata[3].sname}
      link={Sdata[3].links} />

<Card
      imgsrc={Sdata[4].imgscr}
      title={Sdata[4].title}
      sname={Sdata[4].sname}
      link={Sdata[4].links} />
  </>,
  document.getElementById("root")
);

//#24 app 3 map function & map method 
//1
import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

//console.log(Sdata[0].sname); 
// map function ncard    use diff word in place val
function ncard(val) {
  console.log(val);
  return (
    <Card
      imgsrc={val.imgscr}
      title={val.title}
      sname={val.sname}
      link={val.links} />
  );
}
ReactDOM.render(
  <>
    <h1 className="heading_style">List of top 5 Netflix series in 2020</h1>
    {Sdata.map(ncard)}
  </>,
  document.getElementById("root")
);

//#24 2 fat arrow functions
import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

// console.log(Sdata[0].sname); 
//function ncard(val) {
//console.log(val);}
ReactDOM.render(
  <>
    <h1 className="heading_style">List of top 5 Netflix series in 2020</h1>
    {Sdata.map(function ncard(val){
      return (
    <Card
      imgsrc={val.imgscr}
      title={val.title}
      sname={val.sname}
      link={val.links} />
  );
    })}
  </>,
  document.getElementById("root")
);*/


/* diff  
function myname(vinod){           function myname(a,b){
                                  return a+b;  }     
}
const myname = (vinod) =>{        const myname = (a,b) =>{        const myname = (a,b) => a+b;
                                  return a+b;  }
}
*/

/*
//#24 3 fat arrow
import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

// console.log(Sdata[0].sname); 
//function ncard(val) {
//console.log(val);}
ReactDOM.render(
  <>
    <h1 className="heading_style">List of top 5 Netflix series in 2020</h1>
    {Sdata.map((val,index) => {  // console index ka use list ke liye kiya hai console me dikhegi
      console.log(index);
      return (
    <Card
      imgsrc={val.imgscr}
      title={val.title}
      sname={val.sname}
      link={val.links} />
  );
    })}
  </>,
  document.getElementById("root")
);

//#25 Debugging & Error in React JS 1
import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

// console.log(Sdata[0].sname); 
//function ncard(val) {
//console.log(val);}
ReactDOM.render(
  <>
    <h1 className="heading_style">List of top 5 Netflix series in 2020</h1>
    {Sdata.map((val, index) => {
      console.log(index);  // key ka use warning hatane ke liye  each child in a list should have a unique "key"
      return (
        <Card
          key={val.id}
          imgsrc={val.imgscr}
          title={val.title}
          sname={val.sname}
          link={val.links} />
      );
    })}
  </>,
  document.getElementById("root")
);

//#25 2
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";

ReactDOM.render(<App />,document.getElementById("root"));


//#26 #27 #28 #29 #30 #31 #32 #33 #34 #35 #36 #37
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";

ReactDOM.render(<App />,document.getElementById("root"));

// # 38 use spread operator three dots do in react
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";

ReactDOM.render(<App />, document.getElementById("root"));

//const fullname = ["vinod", "thapa"];

//const biodata = [1, ...fullname, 26, "male"];
//console.log(games);

//console.log(fullname);
//console.log(biodata);


//var shooterGames = ["Call of Duty", "Far Cry", "Resident Evil"];
//var racingGames = ["Need For Speed", "Gran Turismo", "Burnout"];
//var games = [...shooterGames, ...racingGames];

// 3rd cases
//var shooterGames = ["Call of Duty", "Far Cry", "Resident Evil"];
//var [first, ...remaining] = shooterGames;
//console.log(first); //Call of Duty
//console.log(remaining);

// 4th cases
const fullName = {
  fname : "dharm",
  lname : "thakur",
};

const biodata = {
  id : 1,
  ...fullName,
  age :26,
  gender: "male",
};

console.log(biodata);

//# 40

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
//import Demo from "./Demo";

ReactDOM.render(<App />, document.getElementById("root"));

// #41 chall8

import React from "react";
import ReactDOM  from "react-dom";
import "./index.css";
import App from "./App.jsx";
//import Demo from "./Demo";
import ToDoList from "./ToDoLists";

ReactDOM.render(<ToDoList/>, document.getElementById("root"));

//# 44 npm

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
//import Demo from "./Demo";
import Todolists from "./ToDoLists";

ReactDOM.render(<Todolists />, document.getElementById("root"));

//# 45 
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
//import Demo from "./Demo";
import Todolist from "./ToDoLists";
import ToDoList from "./ToDoLists";

ReactDOM.render(<ToDoList />, document.getElementById("root"));

//#47
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
//import Demo from "./Demo";
import Todolist from "./ToDoLists";

ReactDOM.render(<App />, document.getElementById("root"));

//#50 
import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import App from "./App.jsx";

ReactDOM.render( <ComA />, document.getElementById("root"));

//# 55
import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import App from "./App.jsx";
import ComA from "./ComA.jsx";

ReactDOM.render( <ComA />, document.getElementById("root"));

//#56 57 58 59 60 61 62 63 64 65 66
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root"));*/

//# 67
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById("root"));


