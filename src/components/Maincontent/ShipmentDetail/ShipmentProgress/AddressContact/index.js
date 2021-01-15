import React from 'react'

import {formatPhoneNumber } from "../../../../util";
import {
  
  ProgressBoxInfo, 
  StopAddress,
  StopContact
} from "../styles";

const AddressContact = ({stop}) =>{

  return (
    <>
    {stop.contact ? (
      <>
        <ProgressBoxInfo>
          <StopAddress>
            <p>
              <strong>
                {stop.city}, {stop.state} {stop.zipcode}
              </strong>
            </p>
            <p>{stop.address}</p>
          </StopAddress>

          <StopContact>
            <p>
              <strong>{stop.contact.name}</strong>
            </p>
            {stop.contact.phoneNumber ? (
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path
                    fill="currentColor"
                    d="M18.682 29.318a35.016 35.016 0 0 0 8.55 6.29l4.888-4.886a2.221 2.221 0 0 1 2.317-.51 26.354 26.354 0 0 0 7.214 1.385 2.3 2.3 0 0 1 1.573.68c.445.444.672 1.024.679 1.601L44 41.774A2.184 2.184 0 0 1 41.77 44c-9.472-.362-18.917-4.217-26.235-11.535C8.217 25.147 4.362 15.702 4 6.23A2.184 2.184 0 0 1 6.226 4l7.896.097a2.304 2.304 0 0 1 1.602.68 2.3 2.3 0 0 1 .679 1.572c.12 2.438.582 4.867 1.384 7.214.28.793.11 1.697-.51 2.317l-4.884 4.888a35.016 35.016 0 0 0 6.29 8.55z"
                  />
                </svg>
                {formatPhoneNumber(stop.contact.phoneNumber)}
              </p>
            ) : (
              ""
            )}
          </StopContact>
        </ProgressBoxInfo>
      </>
    ) : null}
    </>
  )
}

export default AddressContact