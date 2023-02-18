import React from "react";
import "./ListItems.css";


import {FontAwsomeIcon} from "@fontawsome/react-fontawsome";
import {FlipMove} from "react-flip-move";



function ListItems(props) {
    const items = props.items;
    const listItems=items.map(item => {
        return (
            <FlipMove duration={300} easing="ease-in-out">
        <div className="list" key={item.key}>
        <p>
        <input type="text" 
        id={item.key} 
        value ={item.text}
            onChange={
                (e) => {
                    props.setUpdate(e.target.value, item.key)
                }
            }/>
            <span>
            <FontAwsomeIcon 
            className="faicons" 
            icon="trash"
            onClick={() => props.deleteItem(item.key)}/>
        </span>
        </p>
        </div>
        </FlipMove>
    )})
  return
    <div className="list-todo"><FlipMove duration={300} easing="ease-in-out"></FlipMove></div>
}

export default ListItems;
