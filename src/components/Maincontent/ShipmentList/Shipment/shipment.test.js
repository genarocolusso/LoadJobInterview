import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import {
  GET_SHIPMENTS,
  SELECT_SHIPMENT,
} from "../../../../store/actions/actionsType";

import * as actions from "../../../../store/actions/shipmentTasks";

import thunk from "redux-thunk";

import configureStore from "redux-mock-store"; 
import Shipment from ".";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialstate = {
  allShipments: [
    {
      id: 2,
      equipmentType: "DRV",
      status: "current",
      stops: [
        {
          city: "Savannah",
          state: "GA",
          country: "USA",
          windowStart: "2021-02-26T14:00:00.000Z",
          windowEnd: "2021-02-26T22:00:00.000Z",
        },
        {
          city: "Aurora",
          state: "IL",
          country: "USA",
          windowStart: "2021-02-26T14:00:00.000Z",
          windowEnd: "2021-02-26T22:00:00.000Z",
        },
      ],
    },
    {
      id: 4,
      equipmentType: "DRV",
      status: "canceled",
      stops: [
        {
          city: "Savannah",
          state: "GA",
          country: "USA",
          windowStart: "2021-02-26T14:00:00.000Z",
          windowEnd: "2021-02-26T22:00:00.000Z",
        },
        {
          city: "New York",
          state: "NY",
          zipcode: "10009",
          windowStart: "2021-02-26T14:00:00.000Z",
          windowEnd: "2021-02-26T22:00:00.000Z",
        },
      ],
    },
    {
      id: 5,
      equipmentType: "DRV",
      status: "canceled",
      stops: [
        {
          city: "Savannah",
          state: "GA",
          country: "USA",
          windowStart: "2021-02-26T14:00:00.000Z",
          windowEnd: "2021-02-26T22:00:00.000Z",
        },
        {
          city: "Aurora",
          state: "IL",
          country: "USA",
          windowStart: "2021-02-26T14:00:00.000Z",
          windowEnd: "2021-02-26T22:00:00.000Z",
        },
      ],
    },
    {
      id: 6,
      equipmentType: "RFR",
      status: "canceled",
      stops: [
        {
          city: "Savannah",
          state: "GA",
          country: "USA",
          windowStart: "2021-02-26T14:00:00.000Z",
          windowEnd: "2021-02-26T22:00:00.000Z",
        },
        {
          city: "New York",
          state: "NY",
          country: "USA",
          windowStart: "2021-02-26T14:00:00.000Z",
          windowEnd: "2021-02-26T22:00:00.000Z",
        },
      ],
    },
    {
      id: 3,
      equipmentType: "DRV",
      status: "current",
      stops: [
        {
          city: "Bronx",
          state: "NY",
          country: "USA",
          windowStart: "2021-02-26T14:00:00.000Z",
          windowEnd: "2021-02-26T22:00:00.000Z",
        },
        {
          city: "Chicago",
          state: "IL",
          country: "USA",
          windowStart: "2021-02-26T14:00:00.000Z",
          windowEnd: "2021-02-26T22:00:00.000Z",
        },
      ],
    },
    {
      id: 1,
      equipmentType: "DRV",
      status: "current",
      stops: [
        {
          city: "New York",
          state: "NY",
          country: "USA",
          windowStart: "2021-03-26T14:00:00.000Z",
          windowEnd: "2021-03-26T22:00:00.000Z",
        },
        {
          city: "Miami",
          state: "FL",
          country: "USA",
          windowStart: "2021-03-29T14:00:00.000Z",
          windowEnd: "2021-03-29T22:00:00.000Z",
        },
      ],
    },
  ],
  selectedShipment: {
    id: 2,
    price: 2240,
    shipperRatingScore: 3.2,
    weight: 45000,
    commodity: "Apples",
    equipmentSize: "53",
    equipmentType: "DRV",
    status: "current",
    map: "https://api-loadsmart-shipments.netlify.app/assets/map.png",
    stops: [
      {
        address: "404 W Bay St",
        city: "Savannah",
        state: "GA",
        country: "USA",
        zipcode: "31401",
        windowStart: "2021-02-26T14:00:00.000Z",
        windowEnd: "2021-02-26T22:00:00.000Z",
        startTimeZone: "America/New_York",
        latitude: 40.722453,
        longitude: -74.002819,
        contact: {
          name: "Sakura Asaki",
          phoneNumber: "+12120001122",
        },
      },
      {
        address: "39W585 Jericho Rd",
        city: "Aurora",
        state: "IL",
        zipcode: "60506",
        country: "USA",
        windowStart: "2021-02-26T14:00:00.000Z",
        windowEnd: "2021-02-26T22:00:00.000Z",
        startTimeZone: "America/New_York",
        latitude: 25.775148,
        longitude: -80.193629,
        contact: {
          name: "Tom Lucas",
          phoneNumber: "+13470001122",
        },
      },
    ],
  },
};
describe("My Connected React-Redux Component", () => {
  let store;
  let component;
  const testShipment = {
    id: 2,
    equipmentType: "DRV",
    status: "current",
    stops: [
      {
        city: "Savannah",
        state: "GA",
        country: "USA",
        windowStart: "2021-02-26T14:00:00.000Z",
        windowEnd: "2021-02-26T22:00:00.000Z",
      },
      {
        city: "Aurora",
        state: "IL",
        country: "USA",
        windowStart: "2021-02-26T14:00:00.000Z",
        windowEnd: "2021-02-26T22:00:00.000Z",
      },
    ],
  };
  beforeEach(() => {
    store = mockStore({
      shipment: initialstate,
    });

    component = renderer.create(
      <Provider store={store}>
        <Shipment shipment={testShipment} />
      </Provider>
    );
  });

  it("should render with given state from Redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
  //jest --updateSnapshot  , flag to regenerate snapshots. can be changed on package
});
