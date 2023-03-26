// #40 todolists 1st project
/*import React from "react";

const ToDoLists = (props) => {

    //const deleteItems = () =>{
    //    console.log("deleted");};
    return (
        <>
            <div className="todo_style">
                <i className="fa fa-times" aria-hidden="true"
                //    onClick={props.onSelect} 
                onClick={() =>{
                props.onSelect(props.id);
                }}

                    />
                <li> {props.text} </li>
            </div>
        </>
    );
};

export default ToDoLists;

// # 41 
import React, { useState } from "react";
const ToDoList = () => {

    const [num , setNum] = useState(0);

    const incNum = () =>{
        setNum(num+1);
    };

    const decNum = () =>{
        if(num > 0){         //conditional statement
        setNum(num-1);
        }else{
            alert ("Sorry , Zero Limit Reached")
            setNum(0);
        }
    };
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1> {num} </h1>
                    <div className="btn_div">
                        <button onClick={incNum}> Increm </button>
                        <button onClick={decNum}> Decrem </button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ToDoList;

//# 42 material ui icons

import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";


const ToDoList = () => {

    const [num , setNum] = useState(0);

    const incNum = () =>{
        setNum(num+1);
    };

    const decNum = () =>{
        if(num > 0){         //conditional statement
        setNum(num-1);
        }else{
            alert ("Sorry , Zero Limit Reached")
            setNum(0);
        }
    };
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1> {num} </h1>
                    <div className="btn_div">
                        <button onClick={incNum}>
                        <AddIcon/></button>
                        <button onClick={decNum}> 
                         <DeleteIcon/> </button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ToDoList;

//# 43

import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';



const ToDoList = () => {

    const [num, setNum] = useState(0);

    const incNum = () => {
        setNum(num + 1);
    };

    const decNum = () => {
        if (num > 0) {         //conditional statement
            setNum(num - 1);
        } else {
            alert("Sorry , Zero Limit Reached")
            setNum(0);
        }
    };
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1> {num} </h1>
                    <div className="btn_div">
                    <Tooltip title="Add">
                        <Button onClick={incNum} className="btn_green">
                            <AddIcon />
                        </Button>
                        </Tooltip>
                        <Tooltip title="Delete">
                        <Button onClick={decNum} className="btn_red">
                            <DeleteIcon />
                        </Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ToDoList;

//# 44 npm Node Package Manager     mini project

import React from "react";
import Clock from "react-digital-clock";

const ToDoLists = () => {
    <Clock />;
};
export default ToDoLists;*/

// # 45  project2

import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ListCom from "./ListCom";

const ToDoList = () => {

    const [item, setItem] = useState("");
    const [newItem, setNewItem] = useState([]);

    const itemEvent = (event) => {
        setItem(event.target.value);
    };

   const listOfItems = () =>{
    setNewItem((prevValue) =>{
        return [...prevValue ,item]
    });
       setItem("");
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" value={item} placeholder="Add an Items"
                        onChange={itemEvent} />
                    <Button className="newBtn"  onClick={listOfItems}>
                        <AddIcon />
                    </Button>
                    <br />
                    <ol>
                        { newItem.map((val) => {
                           /* return  <li> {val} </li>*/
                           
                           return <ListCom text={val} />;
                        })}
                    </ol>
                    <br />
                </div>

            </div>
        </>
    );

};

export default ToDoList;