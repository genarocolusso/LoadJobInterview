import React from "react";
import renderer from "react-test-renderer";

import ShipmentHeader from ".";

describe("My Connected React-Redux Component", () => {
  let component;
  const stops = [
    {
      city: "Savannah",
      state: "GA",
      country: "USA",
      windowStart: "2021-02-26T14:00:00.000Z",
      windowEnd: "2021-02-26T22:00:00.000Z",
      uid: 0,
    },
    {
      city: "Aurora",
      state: "IL",
      country: "USA",
      windowStart: "2021-02-26T14:00:00.000Z",
      windowEnd: "2021-02-26T22:00:00.000Z",
      uid: 1,
    },
  ];

  component = renderer.create(<ShipmentHeader stops={stops} />);

  it("should render component with given stops", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  
});
