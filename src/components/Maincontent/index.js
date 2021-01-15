import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ShipmentList from "./ShipmentList";
import ShipmentDetail from "./ShipmentDetail";

import { getallShipment } from "../../store/actions/shipmentTasks";

import { Grid } from "./styles";
//MainContent
//Logic for shipments and select shipments goes here

const MainContent = () => {
  const dispatch = useDispatch();
  const shipmentList =
    useSelector((state) => state.shipment.allShipments) || [];

  useEffect(() => {
    dispatch(getallShipment());
  }, [dispatch]);

  return (
    <div className="content">
      <Grid>
        <ShipmentList shipmentList={shipmentList} />
        <ShipmentDetail />
      </Grid>
    </div>
  );
};

export default MainContent;
