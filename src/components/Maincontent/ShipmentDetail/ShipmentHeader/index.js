import React from "react";
import { getDate } from "../../../util";

import {Container, Stop, DestinationArrow} from './styles' 

 

const  ShipmentHeader = ({stops}) =>{
 
  const showDate = ( ) => {
    // shows first stop date
    return (
      getDate(`${ stops[0].windowStart}`, "MMM") +
      " " +
      getDate(`${ stops[0].windowStart}`, "DD")
    );
  };
  

  return (
    <Container>
    <span>{showDate(stops).toLocaleUpperCase()}</span>

    { stops.map((stop, idx) => {
      //add destinations on header with arrow icon
      return (
        <div key={stop.uid}>
          <Stop>
            {stop.city}, {stop.state}
          </Stop>
          {idx <  stops.length - 1 ? (
            <DestinationArrow />
          ) : null}
        </div>
      );
    })}
  </Container>
  )
}

export default ShipmentHeader