import React from "react";
import { Date, ShipmentStops, Stop, Container } from "./styles";

import { selectShipment } from "../../../../store/actions/shipmentTasks";
import { useSelector, useDispatch } from "react-redux";

// function to filter date to the layout
import { getDate } from "../../../util";

//Shipment component
// access shipment data to render it.
const Shipment = ({ shipment }) => {
  const dispatch = useDispatch();
  const selectedid = useSelector((state) => state.shipment.selectedShipment.id);

  const selectHandle = (shipment) => {
    dispatch(selectShipment(shipment));
  };

  return (
    <>
      {shipment && (
        <Container
          selected={selectedid === shipment.id}
          status={shipment.status}
          onClick={() => selectHandle(shipment)}
        >
          <Date status={shipment.status}>
            <div className="month">
              {getDate(`${shipment.stops[0].windowStart}`, "MMM")}
            </div>
            <div className="day">
              {getDate(`${shipment.stops[0].windowStart}`, "DD")}
            </div>
          </Date>

          <ShipmentStops>
            {shipment.stops.map((stop, idx) => (
              <Stop key={idx}>
                {stop.city}, {stop.state}
              </Stop>
            ))}
          </ShipmentStops>
        </Container>
      )}
    </>
  );
};

export default Shipment;
