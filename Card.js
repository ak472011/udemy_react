import React from 'react';
import './Card.css';

function Card(props){
    const classes = 'card '+ props.className;
    return <div className={classes}>{props.children}</div>  //value of the children props will be the value between opening and closing tag in Card tag
}

export default Card;