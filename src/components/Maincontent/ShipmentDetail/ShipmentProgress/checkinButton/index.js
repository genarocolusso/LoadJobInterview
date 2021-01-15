import React from "react";
import { useDispatch } from "react-redux";

import { Container } from "./styles";
import { changeShipmentStatus } from "../../../../../store/actions/shipmentTasks";

const CheckinButton = ({ buttonstatus }) => {
  const dispatch = useDispatch();

  const changeStatus = () => {
    dispatch(changeShipmentStatus(buttonstatus));
  };

  return (
    <>
      <Container onClick={changeStatus}>CHECK IN</Container>
    </>
  );
};

export default CheckinButton;
