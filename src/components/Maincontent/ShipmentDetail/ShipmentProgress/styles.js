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
  animation-delay: 1s;
`;
export const Title = styled.div`
  color: var(--list-title);
  font-weight: 500;
  margin-bottom: 8px;
  font-size: 20px;
`;

export const ProgressBoxInfo = styled.div`
  display: flex;
  align-items: center;
  height: 0px;
  position: relative;
  border: 1px solid var(--border-color);
  background-color: var(--info-box-bg);
  transition: 0.2s ease-in-out all;

  p {
    font-size: 14px;
    > strong {
      font-size: 16px;
    }
  }
  div:first-child {
    padding-left: 50px;
    padding-right: 50px;

    border-left: 0px;
  }
  div {
    padding-left: 25px;
    border-left: 1px solid #cecece;

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }
`;

export const ProgressBox = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid var(--border-color);
  background-color: var(--content-box-bg);
  min-height: 80px;
  position: relative;
  p {
    font-size: 14px;
    > strong {
      font-size: 16px;
    }
  }

  div:first-child {
    padding-left: 50px;
    padding-right: 25px;
    min-width: 180px;
  }
  div {
    padding-left: 25px;
  }

  &:hover + ${ProgressBoxInfo} {
    opacity: 1;
    height: 80px;
  }
`;

export const ProgressGroup = styled.div`
  position: relative;

  &:first-child {
    margin-bottom: 4px;
  }
  &:last-child {
    margin-top: 4px;
  }

  :not(:last-child) ${ProgressBox}::before {
    content: "";
    width: 10px;
    height: calc(100% + 2px);
    background-color: var(--progress-inactive);
    display: block;
    position: absolute;
    left: 25px;
    top: calc(50% + 2px);
    z-index: 1;
  }
  ${ProgressBox}.activeline::before {
    background-color: var(--progress-active) !important;
  }

  ${ProgressBox}::after {
    content: "";
    width: 12px;
    border-radius: 50%;
    height: 12px;
    background-color: var(--progress-inactive-dot);
    display: block;
    position: absolute;
    left: 24px;
    top: 40%;
    z-index: 2;
  }
  ${ProgressBox}.active::after {
    background-color: var(--progress-active-dot) !important;
  }

  &:not(:last-child) ${ProgressBoxInfo}::before {
    content: "";
    width: 10px;
    height: 100%;
    background-color: var(--progress-inactive);
    display: block;
    position: absolute;
    left: 25px;
    top: calc(50% + 2px);
    z-index: 1;
    opacity: 1;
  }
`;

export const ProgressStatus = styled.div`
  font-weight: bold;
`;
export const ProgressCommodity = styled.div`
  p {
    line-height: 1.5;
    font-size: 14px;
    > strong {
      text-transform: uppercase;
      font-size: 14px;
    }
  }
`;
export const StopAddress = styled.div`
  p {
    line-height: 1.5;
  }
`;
export const StopContact = styled.div`
  > p {
    line-height: 1.5;
    display: flex;
    align-items: center;

    > svg {
      height: 16px;
      margin-right: 4px;
      width: auto;
      color: var(--green);
    }
  }
`;
