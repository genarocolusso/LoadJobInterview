import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectShipment } from "../../../store/actions/shipmentTasks";
import ShipmentProgress from "./ShipmentProgress";
import LoadingDetails from "./LoadingDetails";
import ShipmentHeader from "./ShipmentHeader";

import { Container, ShipmentDestination, ShipmentMap } from "./styles";

// display shipmentDetail
const ShipmentDetail = () => {
  const dispatch = useDispatch();
  const selectedShipment = useSelector(
    (state) => state.shipment.selectedShipment
  );

  // useEffect(() => {
  //   const refreshShipment = setInterval(() => {
  //     dispatch(selectShipment(selectedShipment));
  //   }, 30000);
  //   return () => {
  //     clearInterval(refreshShipment);
  //   };
  // }, [selectedShipment]);

  return (
    <>
      {selectedShipment.id ? (
        <Container>
          <ShipmentDestination>
            <ShipmentHeader stops={selectedShipment.stops} />

            <ShipmentMap>
              <img src={selectedShipment.map} alt="shipment Map" />
            </ShipmentMap>
          </ShipmentDestination>

          <ShipmentProgress shipmentdetail={selectedShipment} />
        </Container>
      ) : (
        <LoadingDetails />
      )}
    </>
  );
};

export default ShipmentDetail;
