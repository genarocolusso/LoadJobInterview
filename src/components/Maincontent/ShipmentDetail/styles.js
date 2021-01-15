import styled from "styled-components";
 
import { keyframes } from "styled-components";



const fade = keyframes`
0% { opacity:0;   }  
100% { opacity:1;   }
`;


export const Container = styled.div`
opacity: 0;
animation-name: ${fade};
  animation-duration: 1.2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: 0.2s;
`;
export const ShipmentDestination = styled.div``;
 

export const ShipmentMap = styled.div`
margin-bottom: 16px;
  > img {
    width: 100%;
    height: auto;

    border: 1px solid var(--border-color);
  }
`;

 