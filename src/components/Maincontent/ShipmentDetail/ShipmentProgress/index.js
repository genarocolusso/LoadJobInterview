import React from "react";
import moment from "moment-timezone";

import AddressContact from "./AddressContact";

import { numberWithCommas } from "../../../util";
import {
  Container,
  Title,
  ProgressBox,
  ProgressStatus,
  ProgressCommodity,
  ProgressGroup,
} from "./styles";

import CheckinButton from "./checkinButton";
const ShipmentProgress = ({ shipmentdetail }) => {
  // const [status, setStatus] = useState(shipmentdetail.status)

  return (
    <>
      {shipmentdetail && (
        <Container>
          <Title>Progress {shipmentdetail.status}</Title>
          <div>
            <ProgressGroup>
              <ProgressBox className="active activeline">
                <ProgressStatus>BOOKED</ProgressStatus>
                <ProgressCommodity>
                  <p>
                    COMMODITY: <strong>{shipmentdetail.commodity}</strong>
                  </p>
                  <p>
                    WEIGHT:{" "}
                    <strong>
                      {numberWithCommas(shipmentdetail.weight)} LBS
                    </strong>
                  </p>
                </ProgressCommodity>
              </ProgressBox>
            </ProgressGroup>

            {shipmentdetail.stops.map((stop, idx) => {
              // renders  stop information box

              if (idx === 0) {
                //if first stop = pickup place
                return (
                  <ProgressGroup key={stop.uid}>
                    <ProgressBox
                      className={
                        shipmentdetail.status == "booked" ? "active" : ""
                      }
                    >
                      <ProgressStatus>PICKUP</ProgressStatus>
                    </ProgressBox>
                    <AddressContact stop={stop} />
                  </ProgressGroup>
                );
              } else {
                return (
                  <>
                    <ProgressGroup key={stop.uid}>
                      <ProgressBox>
                        <ProgressStatus>DELIVERY {idx}</ProgressStatus>
                        <div>
                          <p>APPOINTMENT</p>
                        </div>
                        <div>
                          <p>
                            {moment(stop.windowStart)
                              .tz("America/New_York")
                              .format(" h:mm  a")}
                            {" - "}
                            {moment(stop.windowEnd)
                              .tz("America/New_York")
                              .format(" h:mm  a")}
                          </p>
                        </div>
                      </ProgressBox>
                      <AddressContact stop={stop} />
                    </ProgressGroup>
                    <ProgressGroup>
                      <ProgressBox>
                        <ProgressStatus>ARRIVED</ProgressStatus>
                        <div>
                          <p> PENDING</p>
                        </div>
                      </ProgressBox>
                    </ProgressGroup>
                    <ProgressGroup>
                      <ProgressBox>
                        <ProgressStatus>DEPARTED</ProgressStatus>
                        <div>
                          <p> PENDING</p>
                        </div>
                      </ProgressBox>
                    </ProgressGroup>
                  </>
                );
              }
            })}

            <ProgressGroup>
              <ProgressBox>
                <ProgressStatus>POD</ProgressStatus>
                <div>
                  <p> PENDING UPLOAD</p>
                </div>
              </ProgressBox>
            </ProgressGroup>
          </div>
        </Container>
      )}
    </>
  );
};

export default ShipmentProgress;
