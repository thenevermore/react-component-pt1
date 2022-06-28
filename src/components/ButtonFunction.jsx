import React from "react";

const ButtonFunction = ({text, handler}) => {

    return <button onClick={handler} >{ text ? text : "I'm button function default" }</button>
}

export default ButtonFunction;