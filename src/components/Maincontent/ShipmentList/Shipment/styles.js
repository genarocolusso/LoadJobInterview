import styled from "styled-components";

//tried to use props instead of 
export const Container = styled.div`
  display: grid;
  grid-template-columns: 55px 1fr;
  border: 1px solid var(--border-color);
  background-color: ${(props) =>
    props.selected ? "var(--shipment-bg-selected)" : "var(--shipment-bg)"};
  margin: 1px 0px;
  color: ${(props) =>
    props.selected ? `var(--list-text-selected)` : `var(--list-text)`};
  padding: 10px 4px;
  transition: 0.3s ease-in all;
  cursor: pointer;
  :hover {
    background-color: var(--shipment-bg-selected);
    color: var(--list-text-selected);
  }

  ${(props) =>
    props.status === "canceled" &&
    `
    background-color: var(--disabled-box);
    border:1px solid var(--disabled-box);
    color: var(--disabled-text);
    :hover { 
    background-color: var(--disabled-box);
    color: var(--disabled-text);
  }
  `}


`;
export const Date = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  > .month {
    text-transform: uppercase;
    color: ${(props) =>
    props.status === 'canceled' ? "var(--disabled-text)" : "var(--green)"};
    font-size: 14px;
    font-weight: bold;
  }

  > .day {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
`;

export const ShipmentStops = styled.div``;

export const Stop = styled.div`
  margin-bottom: 4px;
  font-weight: 600;
`;
