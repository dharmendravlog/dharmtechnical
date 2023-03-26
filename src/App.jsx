//#18 component
/*import React from "react";
import Heading from "./Heading";
import Para from "./Para";
import List from "./List";

function App(){
    return(
        <>
            <Heading/>
            <Para/>
            <List/>
        </>
    );
}
export default App;*/

//#19
/*import React from "react";

function App() {
    // new Date(year, month, day, hours, minutes, seconds, milliseconds)
    let curDate = new Date();   //new Date(2020,5,5,10);
    curDate = curDate.getHours();
    let greeting = "";
    const cssStyle = {};

    if (curDate >= 1 && curDate < 12) { greeting = "Good Morning"; cssStyle.color = "green"; }
    else { greeting = "Good Night"; cssStyle.color = "black"; }
    else if (curDate >= 12 && curDate < 19) { greeting = "Good Afternoon"; cssStyle.color = "orange"; }

    return (
        <>
            <div>
                <h1>Hello Sir, <span style={cssStyle}> {greeting}</span></h1>
            </div>
        </>
    );
}
export default App;

//#20 import and export module

const youtuber = "dharm technical!!!";

const favprog = "React js";

function myName() {
    let name = "dharm"
    return name;
}

function myNames() {
    let names = "dharm singh"
    return names;
}

export default youtuber;  // ek hi default hoga other is use in {}

export { favprog, myName, myNames };

//#21 2
import React from "react";
import { add, sub, mult, div } from "./Calc"

function App() {
    return (
        <>
            <ul>
                <li>{add(40, 4)} </li>
                <li> {sub(40, 4)}</li>
                <li> {mult(40, 4)}</li>
                <li> {div(40, 3)}</li>
            </ul>
        </>
    );
}
export default App;

// #25
import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";


const App = () => (
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
  </>
  );
  export default App;

// #26 1
import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";

const favSeries = "netflix";

const FavS = () => {             // fat arrow me first letter must be capital
    if (
        favSeries === "netflix") {
        return (
            <Card
                key={Sdata[1].id}
                imgsrc={Sdata[1].imgscr}
                title={Sdata[1].title}
                sname={Sdata[1].sname}
                link={Sdata[1].links}
            />
        );  
    } else {
        return (
            <Card
                key={Sdata[3].id}
                imgsrc={Sdata[3].imgscr}
                title={Sdata[3].title}
                sname={Sdata[3].sname}
                link={Sdata[3].links}
            />
        );
    }
};

const App = () => (
    <>
        <h1 className="heading_style">List of top 5 Netflix series in 2020</h1>
        <FavS />
    </>
);
export default App;

// # 26 2
import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const favSeries = "netflix";

const FavS = () => {             // fat arrow me first letter must be capital
    if (
        favSeries === "netflix") {
        return (
            <Netflix />
        );  
    } else {
        return (
            < Amazon/>
        );
    }
};

const App = () => (
    <>
        <h1 className="heading_style">List of top 5 Netflix series in 2020</h1>
        <FavS />
    </>
);
export default App;

// # 27 ternary operator
import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const favSeries = "netflix";

//const FavS = () => {             // fat arrow me first letter must be capital
  //  if (
  //    favSeries === "netflix") {
  //  return ( <Netflix /> );  
  // } else {
  //     return (< Amazon/> );
  //  }
  //};

const App = () => (
    <>
        <h1 className="heading_style">List of top 5 Netflix series in 2020</h1>
       {/* <FavS /> */  //}
/*  { (favSeries === "netflix") ?  <Netflix /> :  <Amazon /> }
</>
);
export default App;

// # 28  1 slot machine
import React from "react";

const SlotM = () => {
    let x = "ICON";
    let y = "ICON";
    let z = "ICON";

    if ( (x === y && y === z) ){
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
}

const App = () => {
    return (
        <>
            <h1 className="heading_style">
                icon Welcome to{" "}
                <span style={{ fontWeight: "bold" }} > Slot machine game</span> icon{" "}
            </h1>
            < SlotM/>
            
        </>
    );

};
export default App;

//# 28 2
import React from "react";

const SlotM = (props) => {
    //let x = ":samll";
    //let y = "ICON";
    //let z = "ICON";

    let x=props.x;
    let y=props.y;
    let z=props.z;

    if ( (x === y && y === z) ){
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
}

const App = () => {
    return (
        <>
            <h1 className="heading_style">
                icon Welcome to{" "}
                <span style={{ fontWeight: "bold" }} > Slot machine game</span> icon{" "}
            </h1>
            <div className="slotmachine">
            < SlotM  x="ICON" y="ICON" z="ICON"  />
            <hr />
            < SlotM  x="ICON" y="ICONn" z="ICON" />
            <hr />
            < SlotM  x="Applee" y="Banana" z="Apple"/>
            <hr />
            < SlotM  x="ICON" y="ICON" z="ICON"/>
        
            </div>
           
            
        </>
    );

};
export default App;

// # 28 3
import React from "react";
import SlotM from "./SlotMach";


const App = () => {
    return (
        <>
            <h1 className="heading_style">
                icon Welcome to{" "}
                <span style={{ fontWeight: "bold" }} > Slot machine game</span> icon{" "}
            </h1>
            <div className="slotmachine">
                < SlotM x="ICON" y="ICON" z="ICON" />
                <hr />
                < SlotM x="ICON" y="ICONn" z="ICON" />
                <hr />
                < SlotM x="Apple" y="Banana" z="Apple" />
                <hr />
                < SlotM x="ICON" y="ICON" z="ICON" />
            </div>
        
        </>
    );

};
export default App;

//# 29 

import React from "react";

const App = () => {
    let x = "dharm 😄 ❣️ 👍  ";

    return <h1>My name is {x} </h1>;
};

export default App;

//# 30 1 event  // state change nhi ho rhi  yhi ek problem thi  functional component ke sath jb bhi
              // state ki thi log isko switch krke class component use krte the    but now 16.8 ke bad use concept of hooks
                                               
import React from "react";

let count = 1;

const IncNum  = () => {
    //count++;
    console.log("clicked" + count++ );
};

const App = () => {
    return(
        <>
            <h1> {count} </h1>
            <button onClick={IncNum}> Click Me </button>
        </>
    );

};

export default App; 

//#30 2 hooks

import React, { useState } from "react";

const App = () => {
    const state = useState();
    //console.log(state);

    const name = ['vi' , 'no' , 'd'];
    //array disturchring
    const [name1 , name2 , name3] = name;
    //  name[0];
     name1

    let count = 1;

    const IncNum = () => {
        //count++;
        console.log("clicked" + count++);
    };

    return (
        <>
            <h1> {count} </h1>
            <button onClick={IncNum}> Click Me </button>
        </>
    );

};

export default App; 

//#30 3 hooks

import React, { useState } from "react";

const App = () => {
    const state = useState();
    //console.log(state);
    const [count, setCount] = useState(0);
    //  use state ek function  which written an array with two item  1jiski value undefined-stateobject 2 updated function
    //  javascript me use only 1 vlaue but useState  function use krte hai it written 2 item current data 2updated function updated data 
    //  usestate me koi bhi value initial data  here count is current data setcount updated data and 5 is initial data  
    //  jab kbhi bhi usestate koi bhi value dege bah initial data hai in sbke karan hi usestate ko hooks bolte hai in react iski
    // help se function component me state variable ka use kr skte hai variable state change kr skte hai
    const IncNum = () => {
        setCount(count + 1);
        //console.log("clicked" + count++);
    };
    return (
        <>
            <h1> {count} </h1>
            <button onClick={IncNum}> Click Me </button>
        </>
    );

};

export default App; 

//# 31 hooks chall 1

import React from "react";



const App = () => {

    let newTime = new Date().toLocaleTimeString();

    //const [ctime, setCtime] = useState(newTime);
    return(
        <>
            <h1> {newTime} </h1>
            <button> get time </button>
        </>

    );
};
 export default App;

 //# 31 2 imp hooks hai class component chodke react functional component use krrke hai

 import React, { useState } from "react";

const App = () => {

    let newTime = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(newTime);

    const UpdateTime =() =>{
        newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    };
    return(
        <>
            <h1> {ctime} </h1>
            <button onClick={UpdateTime}> get time </button>
        </>

    );
};
 export default App;

 //# 32 1 digital clock

 import React, { useState } from "react";

 const App = () => {

    let time = new Date().toLocaleTimeString();
    return(
        <>
            <h1> {time} </h1>

        </>

    );

 };

 export default App;

 //# 32 2

 import React, { useState } from "react";

 const App = () => {

    let time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };

    return(
        <>
            <h1> {ctime} </h1>
            <button onClick={UpdateTime}> get time </button>

        </>

    );

 };

 export default App;

 // #32 3 digital clock mini project

import React, { useState } from "react";

 const App = () => {

    let time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };

setInterval(UpdateTime,1000);
    return(
        <>
            <h1> {ctime} </h1>

        </>

    );

 };

 export default App;

//# 33 handling events 1

import React, { useState } from "react";

const App = () => {

    const purple = "#8e44ad";

    const [bg, setBg] = useState(purple);
    const [name, setName] = useState("click Me");

    const bgChange = () => {
        // console.log("clicked");
        let newBg = "#34495e";
        setBg(newBg);
        setName("Ouch!! 😺 ");

    };

    const bgBack = () => {
        setBg(purple);
        setName("ayyo!! 😠 ");
    }

    return (
        <>
            <div style={{ backgroundColor: bg }}>
                <button onClick={bgChange} onDoubleClick={bgBack} > {name}</button>
            </div>
        </>
    );

};

export default App;

// # 33 2
import React, { useState } from "react";

const App = () => {

    const purple = "#8e44ad";

    const [bg, setBg] = useState(purple);
    const [name, setName] = useState("click Me");

    const bgChange = () => {
        // console.log("clicked");
        let newBg = "#34495e";
        setBg(newBg);
        setName("Ouch!! 😺 ");

    };

    const bgBack = () => {
        setBg(purple);
        setName("ayyo!! 😠 ");
    }

    return (
        <>
            <div style={{ backgroundColor: bg }}>
                <button onMouseEnter={bgChange} onMouseLeave={bgBack} > {name}</button>
            </div>
        </>
    );

};

export default App;


// # 34 1 REACT FORM

import React from "react";

const App = () => {
    return (
        <>
            <div>
                <h1> Hello </h1>
                <input type="text" placeholder="Enter Your Name" defaulValue="" />
                <button> Click Me 👍</button>
            </div>
        </>
    );
};

export default App;

//# 34 2

import React from "react";

const App = () => {

    const inputEvent = () => {
        console.log("clicked");
    };
    return (
        <>
            <div>
                <h1> Hello </h1>
                <input type="text" placeholder="Enter Your Name"
                    onChange={inputEvent} />
                <button> Click Me 👍</button>
            </div>
        </>
    );
};

export default App;

//# 34 3

import React from "react";

const App = () => {

    const inputEvent = (event) => {
        console.log(event.target.value);
    };
    return (
        <>
            <div>
                <h1> Hello </h1>
                <input type="text" placeholder="Enter Your Name"
                    onChange={inputEvent} />
                <button> Click Me 👍</button>
            </div>
        </>
    );
};

export default App;

//# 34 4

import React, { useState } from "react";

const App = () => {
    const [name, setName] = useState("");

    const inputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    };
    return (
        <>
            <div>
                <h1> Hello {name} </h1>
                <input type="text" placeholder="Enter Your Name"
                    onChange={inputEvent} value={name} />
                <button> Click Me 👍</button>
            </div>
        </>
    );
};

export default App;

//# 34 5

import React, { useState } from "react";

const App = () => {
    const [name, setName] = useState("");
    const [fullName, setFullName] = useState();

    const inputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    };
    const onSubmit = () =>{
        setFullName(name);
    };
    return (
        <>
            <div>
                <h1> Hello {fullName} </h1>
                <input type="text" placeholder="Enter Your Name"
                    onChange={inputEvent} value={name} />
                <button onClick={onSubmit}> Click Me 👍</button>
            </div>
        </>
    );
};

export default App;

// # 35 1

import React, { useState } from "react";

const App = () => {
    const [name, setName] = useState("");
    const [fullName, setFullName] = useState();

    const inputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    };
    const onSubmit = () => {
        setFullName(name);
    };
    return (
        <>
            <div className="main_div">
                <form>
                    <div>
                        <h1> Hello {fullName} </h1>
                        <input type="text" placeholder="Enter Your Name"
                            onChange={inputEvent}
                            value={name} />
                        <br />
                        <button type="submit" onClick={onSubmits}> submit Me 👍</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default App;

//# 35 2

import React, { useState } from "react";

const App = () => {
    const [name, setName] = useState("");
    const [fullName, setFullName] = useState();

    const onSubmits = () => {
        setFullName(name);
    };

        const inputEvent = (event) => {
            console.log(event.target.value);
            setName(event.target.value);
        };

    
    return (
        <>
            <div className="main_div">
                <form onSubmit={onSubmits}>
                    <div>
                        <h1> Hello {fullName} </h1>
                        <input type="text" placeholder="Enter Your Name"
                            onChange={inputEvent}
                            value={name} />
                        <br />
                        <button type="submit"> submit Me 👍</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default App;

// # 35 3

import React, { useState } from "react";

const App = () => {
    const [name, setName] = useState("");

    const [ lastName, setLastName] = useState("");

    const [fullName, setFullName] = useState("");

    const [lastNameNew, setLastNameNew] = useState("");

    const onSubmits = (event) => {
        event.preventDefault();
        setFullName(name);
        setLastNameNew(lastName);
    };

    const inputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    };

    const inputEventTwo = (event) => {
        setLastName(event.target.value);
    };


    return (
        <>
            <div className="main_div">
                <form onSubmit={onSubmits}>
                    <div>
                        <h1> Hello {fullName}{lastNameNew} </h1>
                        <input type="text" placeholder="Enter Your Name"
                            onChange={inputEvent}
                            value={name} />
                        <input type="text" placeholder="Enter Your Last Name"
                            onChange={inputEventTwo}
                            value={lastName} />
                        <br />
                        <button type="submit"> submit Me 👍</button>
                    </div>-
                </form>
            </div>
        </>
    );
};

export default App;

//# 36  handling form complex state

import React, { useState } from "react";

const App = () => {
    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
    });

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);
        // console.log(event.target.placeholder);

        const value = event.target.value;
        const name = event.target.name;

        setFullName((preValue) => {
            //console.log(preValue);
            if (name === "fName") {
                return {
                    fname: value,
                    lname: preValue.lname,
                };
            } else if (name === "lName") {
                return {
                    fname: preValue.fname,
                    lname: value,
                };
            }
        });

    };

    const onSubmits = (event) => {
        event.preventDefault();
        alert("form submitted");
    };

    return (
        <>
            <div className="main_div">
                <form onSubmit={onSubmits}>
                    <div>
                        <h1> Hello {fullName.fname} {fullName.lname} </h1>
                        <input type="text"
                            placeholder="Enter Your Name"
                            name="fName"
                            onChange={inputEvent}
                            value={fullName.fname}
                        />
                        <input type="text"
                            placeholder="Enter Your Last Name"
                            onChange={inputEvent}
                            name="lName"
                            value={fullName.lname}
                        />
                        <br />
                        <button type="submit"> submit Me 👍</button>
                    </div>-
                </form>
            </div>
        </>
    );
};

export default App;

// # 37 react login form chall

import React, { useState } from "react";

const App = () => {
    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
    });

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);
        // console.log(event.target.placeholder);

        // const value = event.target.value;
        //const name = event.target.name;

        const { value, name } = event.target;

        setFullName((preValue) => {
            //console.log(preValue);
            if (name === "fName") {
                return {
                    fname: value,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: preValue.phone,
                };
            
        } else if (name === "lName") {
            return {
                fname: preValue.fname,
                lname: value,
                email: preValue.email,
                phone: preValue.phone,
            };
        } else if (name === "email") {
            return {
                fname: preValue.fname,
                lname: preValue.lname,
                email: value,
                phone: preValue.phone,
            };
        } else if (name === "phone") {
            return {
                fname: preValue.fname,
                lname: preValue.lname,
                email: preValue.email,
                phone: value,
            };
        }
    });

};

const onSubmits = (event) => {
    event.preventDefault();
    alert("form submitted");
};

return (
    <>
        <div className="main_div">
            <form onSubmit={onSubmits}>
                <div>
                    <h1> Hello {fullName.fname} {fullName.lname} </h1>
                    <p>{fullName.email}</p>
                    <p>{fullName.phone}</p>
                    <input type="text"
                        placeholder="Enter Your Name"
                        name="fName"
                        onChange={inputEvent}
                        value={fullName.fname}
                    />
                    <input type="text"
                        placeholder="Enter Your Last Name"
                        onChange={inputEvent}
                        name="lName"
                        value={fullName.lname}
                    />
                    <input type="email"
                        placeholder="Enter Your Email"
                        onChange={inputEvent}
                        name="email"
                        value={fullName.email}
                        autoComplete="off"
                    />
                    <input type="number"
                        placeholder="Enter Your mobile Number"
                        onChange={inputEvent}
                        name="phone"
                        value={fullName.phone}
                    />
                    <br />
                    <button type="submit"> submit Me 👍</button>
                </div>-
            </form>
        </div>
    </>
);
};

export default App;

//#39

import React, { useState } from "react";

const App = () => {
    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
    });

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);
        // console.log(event.target.placeholder);

        // const value = event.target.value;
        //const name = event.target.name;

        const { value, name } = event.target;

        setFullName((preValue) => {
            console.log(preValue);

            return {
               ...preValue,
                [name]: value,
            };

            //  if (name === "fName") {
            //     return {
            //       fname: value,
            //       lname: preValue.lname,
            //       email:preValue.email,
            //       phone: preValue.phone,
            //   };

            //} else if (name === "lName") {
            //    return {
            //        fname: preValue.fname,
            //        lname: value,
            //        email: preValue.email,
            //        phone: preValue.phone,
            //    };
            //} else if (name === "email") {
            //   return {
            //fname: preValue.fname,
            //    lname: preValue.lname,
            //        email: value,
            //            phone: preValue.phone,
            //};
            // } else if (name === "phone") {
            //   return {
            //     fname: preValue.fname,
            //   lname: preValue.lname,
            // email: preValue.email,
            // phone: value,
            //};
            // }
        });

    };

    const onSubmits = (event) => {
        event.preventDefault();
        alert("form submitted");
    };

    return (
        <>
            <div className="main_div">
                <form onSubmit={onSubmits}>
                    <div>
                        <h1> Hello {fullName.fname} {fullName.lname} </h1>
                        <p>{fullName.email}</p>
                        <p>{fullName.phone}</p>
                        <p>{fullName.qua}</p>
                        <input type="text"
                            placeholder="Enter Your Name"
                            name="fname"
                            onChange={inputEvent}
                            value={fullName.fname}
                        />
                        <input type="text"
                            placeholder="Enter Your Last Name"
                            onChange={inputEvent}
                            name="lname"
                            value={fullName.lname}
                        />
                        <input type="email"
                            placeholder="Enter Your Email"
                            onChange={inputEvent}
                            name="email"
                            value={fullName.email}
                            autoComplete="off"
                        />
                        <input type="number"
                            placeholder="Enter Your mobile Number"
                            onChange={inputEvent}
                            name="phone"
                            value={fullName.phone}
                        />
                         <input type="text"
                            placeholder="Enter Your Qualification"
                            onChange={inputEvent}
                            name="qua"
                            value={fullName.qua}
                        />
                        <br />
                        <button type="submit"> submit Me 👍</button>
                    </div>-
                </form>
            </div>
        </>
    );
};

export default App;

// # 40 project1
import React, { useState } from "react";
import ToDoLists from "./ToDoLists";

const App = () => {

    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });

        setInputList("");
    };

    const deleteItems = (id) => {
        console.log("deleted");

        setItems((oldItems) =>{
            return oldItems.filter((arrElem, index) => {
                return index !== id;

            });
        });
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add a Items"
                        value={inputList}
                        onChange={itemEvent} />
                    <button onClick={listOfItems}> + </button>
                    <ol>
                        {/*<li> {inputList}</li>*/    /*}

{Items.map((itemval, index) => {
// return <li> {itemval} </li>;
return < ToDoLists
key={index}
id={index}
text={itemval}
onSelect={deleteItems}
/>;
})}

</ol>
</div>

</div>

</>
);

};
export default App;

//#47
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const App = () => {
return (
<React.Fragment>
<h1>Welcome to my Channel</h1>
<button className="btn btn-success"> ThapaTechnical</button>
<div class="input-group mb-3">
<span class="input-group-text" id="basic-addon1">@</span>
<input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
</div>

<div class="input-group mb-3">
<input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
<span class="input-group-text" id="basic-addon2">@example.com</span>
</div>

<label for="basic-url" class="form-label">Your vanity URL</label>
<div class="input-group mb-3">
<span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
<input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
</div>

<div class="input-group mb-3">
<span class="input-group-text">$</span>
<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
<span class="input-group-text">.00</span>
</div>

<div class="input-group mb-3">
<input type="text" class="form-control" placeholder="Username" aria-label="Username" />
<span class="input-group-text">@</span>
<input type="text" class="form-control" placeholder="Server" aria-label="Server" />
</div>

<div class="input-group">
<span class="input-group-text">With textarea</span>
<textarea class="form-control" aria-label="With textarea"></textarea>
</div>
</React.Fragment>
);
};
export default App;

//# 48

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
return (
<>
<h1 className="text-capitialize text-center  mt-5 text-danger" >Welcome to my Channel</h1>
</>
);

};
//Intellisense for css class names in html react bootstrap autocomplete
export default App;

//#49 mini project

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
return (
<>
<h1 className="text-center text-danger text-capitalize my-5 ">Welcome to my Channel</h1>
<div className="container text-center">
<div className="row">
<div className="col">
<div class="card">
<img src="https://picsum.photos/536/354" class="card-img-top" alt="..." height="150px" />
<div class="card-body">
<h5 class="card-title">Card title</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div></div>

<div className="col">
<div class="card">
<img src="https://picsum.photos/537/354" class="card-img-top" alt="..." height="150px" />
<div class="card-body">
<h5 class="card-title">Card title</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div></div>

<div className="col">
<div class="card">
<img src="https://picsum.photos/536/355" class="card-img-top" alt="..." height="150px" />
<div class="card-body">
<h5 class="card-title">Card title</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div></div>
</div>
</div>
</>
);

};
export default App;

//# 50 react project

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
const [addItem, setAddItem] = useState([]);

const addNote = (note) => {
//alert("I am clicked");
setAddItem((prevData) => {
return [...prevData, note];
});

console.log(note);
};

const onDelete = (id) => {
setAddItem((olddata) =>
olddata.filter((currdata, indx) => {
return indx !== id;
})
);
};

return (
<>
<Header />
<CreateNote passNote={addNote} />
{/* <Note />    }

{addItem.map((val, index) => {
return (
<Note
key={index}
id={index}
title={val.title}
content={val.content}
deleteItem={onDelete}
/>
);


})}

<Footer />
</>
);
}

export default App;*


//#51 context API    //#52 use state hook

import React, { createContext } from "react";
import ComA from "./ComA";

const FirstName = createContext();
const LastName = createContext();
const App = () => {
return (
<>
<FirstName.Provider value={"Dharmendra"}>
<LastName.Provider value={"Singh"}>
<ComA />
</LastName.Provider>
</FirstName.Provider>
</>
);
};

export default App;
export { FirstName, LastName };

//#53 useFffect hook

import React, { useState, useEffect } from "react";

const App = () => {
const [num, setNum] = useState(0);
const [nums, setNums] = useState(0);

useEffect(() => {
alert("I am clicked");
console.log("I am clicked");
}, [num]);
return (
<>
<button onClick={() => {
setNum(num + 1);
}}
>
click me {num}
</button>
<br/>
<button onClick={() => {
setNums(nums + 1);
}}
>
click me {nums}
</button>
</>

);

};

export default App;

//#54 react hook chall 7

import React, { useEffect, useState } from "react";

const App = () => {
const [num, setNum] = useState(0);

useEffect(()=>{
// alert("hii");
document.title=`you clicked me ${num} times`
});

return <button onClick={() => {
setNum(num+1);
}}>
Click me {num}</button>;
};

export default App;

//# 56 React Router
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";

const App = () => {
const Name = () => {
return <h1>Hello, I am Name Page</h1>;
};
// Switch is not work used Routes
return (
<>
<Routes>
<Route exact path="/" Component={About} />
<Route path="/contact" Component={Contact} />
<Route path="/contact/Name" Component={Name} />
<Route path="*" Component={Error} />
</Routes>


{ /*<About />
<Contact />    }
</>
);

};

export default App; *

//#57

import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";

const App = () => {
const Name = () => {
return <h1>Hello, I am Name Page</h1>;
};
// Switch is not work used Routes
return (
<>
<Menu />
<Routes>
<Route exact path="/" Component={About} />
<Route exact path="/contact" Component={Contact} />
<Route path="/contact/Name" Component={Name} />
<Route path="*" Component={Error} />
</Routes>


{ /*<About />
<Contact />    }
</>
);

};

export default App; 

// #58

import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Error from "./Error";
import Menu from "./Menu";

const App = () => {
const Name = () => {
return <h1>Hello, I am a Name Page</h1>;
};
// Switch is not work used Routes
// component method me har bar call krta hai but 
//render method first bar bas call krta hai phir usi ko update krta rhta hai
// if call krna hai to component method but uses props use render method is best 
// render not work in v18
return (
<>
< Menu />           
<Routes>
<Route exact path="/" Component={() => <About name="About" />} />
<Route exact path="/service" render={() => <Service name="Service" />} />
<Route exact path="/contact" Component={Contact} />
<Route path="/contact/Name" Component={Name} />
<Route path="*" Component={Error} />
</Routes>


{ /*<About />
<Contact />    }
</>
);

};

export default App;

//# 59 useParams hooks
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import User from "./User";
import Error from "./Error";
import Menu from "./Menu";

const App = () => {
const Name = () => {
return <h1>Hello, I am a Name Page</h1>;
};
return (
<>
< Menu />
<Routes>
<Route exact path="/" Component={() => <About name="About" />} />
<Route exact path="/service" render={() => <Service name="Service" />} />
<Route exact path="/contact" Component={Contact} />
<Route path="/contact/Name" Component={Name} />
<Route path="/user/:fname/:lname" Component={User} />
<Route path="*" Component={Error} />
</Routes>


{ /*<About />
<Contact />    }
</>
);

};

export default App;

//#60 uselocation hooks    61 usehistory hook
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import User from "./User";
import Error from "./Error";
import Menu from "./Menu";

const App = () => {
const Name = () => {
return <h1>Hello, I am a Name Page</h1>;
};
return (
<>
< Menu />
<Routes>
<Route exact path="/" Component={() => <About name="About" />} />
<Route path="/service" render={() => <Service name="Service" />} />
<Route exact path="/contact" Component={Contact} />
<Route path="/contact/Name" Component={Name} />
<Route path="/user/:fname/:lname" Component={User} />
<Route path="*" Component={Error} />
</Routes>


{ /*<About />
<Contact />   }
</>
);

};

export default App;

//#62 search filter
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import User from "./User";
import Error from "./Error";
import Menu from "./Menu";
import Search from "./Search";

const App = () => {
const Name = () => {
return <h1>Hello, I am a Name Page</h1>;
};
return (
<>
< Menu />
<Routes>
<Route exact path="/" Component={() => <About name="About" />} />
<Route path="/service" Component={() => <Service name="Service" />} />
<Route exact path="/search" Component={Search} />
<Route exact path="/contact" Component={Contact} />
<Route path="/contact/Name" Component={Name} />
<Route path="/user/:fname/:lname" Component={User} />
<Route path="*" Component={Error} />
</Routes>


{ /*<About />
<Contact />    }
</>
);

};

export default App;

//#63
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";

const App = () => {
return (
<>
< Navbar />
<Routes>
<Route path="/" Component={Home} />
<Route path="/about" Component={() => <About name="About" />} />
<Route path="/contact" Component={Contact} />
</Routes>
</>
);

};

export default App;

//#64
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";

const App = () => {
return (
<>
< Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" Component={() => <About name="About" />} />
<Route path="/contact" Component={Contact} />
<Route path="*" Component={Error} />
</Routes>
</>
);

};

export default App;

//#65 Redirect replace by navigate in v6
import React from "react";
import { Navigate, Route, Routes, } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";

const App = () => {
return (
<>
< Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" Component={() => <About name="About" />} />
<Route path="/contact" Component={Contact} />
{/* <Route path="*" Component={Error} />  }
{/*<Redirect to="/" /> in react router v5 }
<Route path="*" element={<Navigate to="/" replace />} />
</Routes>
</>
);

};

export default App;

//#66 npm install bootstrap 5
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {

return (
<>
<div className="container ">
<h1 className="text-center">Welcome</h1>
<br />
<div className="text-center">
<div class="card" style={{ width: "18rem" }}>
<img src="https://picsum.photos/536/354" class="card-img-top" alt="..." />
<div class="card-body">
<h5 class="card-title">Card title</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
<button className="btn btn-outline-success " >Welcome to future</button>
</div>
</div>
</>
);
};

export default App;*/

//#67 Responsive Animated Website using React
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
