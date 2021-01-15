import styled from "styled-components";

export const Status = styled.div`
  text-transform: uppercase;
  color: var(--list-title);
  font-weight: bold;
  margin-bottom: 8px;
`;

export const ShipmentGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  overflow-y: overlay;
  max-height: 280px;
  scroll-behavior: smooth;
  position: relative;
  /* custom scrollbar */
  ::-webkit-scrollbar {
    width: 20px;
    position: absolute;
    right: 0;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #e2e6e1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #d8e2d5;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
