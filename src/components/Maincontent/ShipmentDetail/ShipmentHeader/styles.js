import styled from "styled-components";

import { MdArrowForward } from "react-icons/md";

export const Stop = styled.div`
display: inline-block`;

export const DestinationArrow = styled(MdArrowForward)`
  color: #b9b9b9;
  margin: 0px 4px;
  display: inline-block
`;


export const Container = styled.div`
  padding: 16px 12px;
  background-color: var(--content-box-bg);
  color: var(--darkgray);
  border: 1px solid var(--border-color);
  display: flex;
  margin-bottom: 8px;

  align-items: center;
  font-size: 21px;
  font-weight: 600;
  > div {
    display: flex; 
  align-items: center;
  }
  > span {
    color: var(--green);
    margin-right: 16px;
  }

  > * {
    display: inline-block
  }
`;