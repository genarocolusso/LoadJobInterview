import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {ListItem} from "./styles";

// LinkItem component
// you can switch to Link instead of anchor if 
// you wanna use React router dom
const InfoLink = (props) => {

  return <ListItem className={props.active && 'active'}> <Link to={props.PATH}> {props.text} </Link> </ListItem>;
};

export default InfoLink;
