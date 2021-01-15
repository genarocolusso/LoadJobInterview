import React from "react";

import { LoadingBox, Dot, Container } from "./styles";
const LoadingDetails = () => {
  return (
    <Container>
      <LoadingBox>
        Select a shipment to check informations
        <Dot delay={"0.1s"} />
        <Dot delay={"0.3s"} />
        <Dot delay={"0.5s"} />
      </LoadingBox>
    </Container>
  );
};

export default LoadingDetails;
