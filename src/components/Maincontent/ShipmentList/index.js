import React from "react";

import Shipment from "./Shipment";
import { Status, ShipmentGroup, Container } from "./styles";

//sort by date and Status
//use list of shipments to  render each component
// handle selected shipment

const sortByDate = (list) => {
  const sortedDate = list.sort(function compare(a, b) {
    var dateA = new Date(a.stops[0].windowStart);
    var dateB = new Date(b.stops[0].windowStart);
    return dateA - dateB;
  });

  return sortedDate;
};

const ShipmentList = ({ shipmentList }) => {
  const ShipmentsByDate = sortByDate(shipmentList);

  const renderlistShipments = (Shipments, status) => {
    return Shipments.filter(
      (item) => item.status === status
    ).map((shipment) => <Shipment key={shipment.id} shipment={shipment} />);
  };

  return (
    <Container>
      <Status>Current</Status>
      <ShipmentGroup>
        <ShipmentGroup>
          {renderlistShipments(ShipmentsByDate, "current")}
        </ShipmentGroup>
      </ShipmentGroup>

      <Status>Canceled</Status>
      <ShipmentGroup>
        {renderlistShipments(ShipmentsByDate, "canceled")}
      </ShipmentGroup>
    </Container>
  );
};

export default ShipmentList;
