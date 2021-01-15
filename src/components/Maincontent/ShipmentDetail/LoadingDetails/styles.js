import styled from "styled-components";
import { keyframes } from "styled-components";

export const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 16px 12px;
  background-color: var(--content-box-bg);
  color: var(--darkgray);
  border: 1px solid var(--border-color);
`;

const poploading = keyframes`
0% { opacity:0; transform: translate(0px,  0px) } 
60% { opacity:1; transform: translate(0px, -5px) }
100% { opacity:0; transform: translate(0px, -5px) }
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--green);
  margin-left: 4px;
  animation-name: ${poploading};
  animation-duration: 1.2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-delay: ${(props) => props.delay};
`;

export const Container = styled.div`
  width: 100%;
  height: 250px;
`;
