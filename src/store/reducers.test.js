import shipmentReducer from "./reducers/shipments";
import * as types from "./actions/actionsType";

const INITIAL_STATE = {
  allShipments: [],
  selectedShipment: {},
};

const allShipmentmock = [
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
];

const selectedShipmentState =  {
  id: 1,
  price: 1240,
  shipperRatingScore: 4.2,
  weight: 52000,
  commodity: 'Apples',
  equipmentSize: '53',
  equipmentType: 'DRV',
  status: 'current',
  map: 'https://api-loadsmart-shipments.netlify.app/assets/map.png',
  stops: [
    {
      address: '39 Wooster Street',
      city: 'New York',
      state: 'NY',
      country: 'USA',
      zipcode: '10013',
      windowStart: '2021-03-26T14:00:00.000Z',
      windowEnd: '2021-03-26T22:00:00.000Z',
      startTimeZone: 'America/New_York',
      latitude: 40.722453,
      longitude: -74.002819,
      contact: {
        name: 'Giovanna Parks',
        phoneNumber: '+12120001122'
      },
      uid: 0
    },
    {
      address: '101 North Miami Avenue',
      city: 'Miami',
      state: 'FL',
      country: 'USA',
      zipcode: '33128',
      windowStart: '2021-03-29T14:00:00.000Z',
      windowEnd: '2021-03-29T22:00:00.000Z',
      startTimeZone: 'America/New_York',
      latitude: 25.775148,
      longitude: -80.193629,
      contact: {
        name: 'John Appleseed',
        phoneNumber: '+13470001122'
      },
      uid: 1
    }
  ]
}


const selectedShipmentPayload =  {
  id: 1,
  price: 1240,
  shipperRatingScore: 4.2,
  weight: 52000,
  commodity: 'Apples',
  equipmentSize: '53',
  equipmentType: 'DRV',
  status: 'current',
  map: 'https://api-loadsmart-shipments.netlify.app/assets/map.png',
  stops: [
    {
      address: '39 Wooster Street',
      city: 'New York',
      state: 'NY',
      country: 'USA',
      zipcode: '10013',
      windowStart: '2021-03-26T14:00:00.000Z',
      windowEnd: '2021-03-26T22:00:00.000Z',
      startTimeZone: 'America/New_York',
      latitude: 40.722453,
      longitude: -74.002819,
      contact: {
        name: 'Giovanna Parks',
        phoneNumber: '+12120001122'
      } 
    },
    {
      address: '101 North Miami Avenue',
      city: 'Miami',
      state: 'FL',
      country: 'USA',
      zipcode: '33128',
      windowStart: '2021-03-29T14:00:00.000Z',
      windowEnd: '2021-03-29T22:00:00.000Z',
      startTimeZone: 'America/New_York',
      latitude: 25.775148,
      longitude: -80.193629,
      contact: {
        name: 'John Appleseed',
        phoneNumber: '+13470001122'
      } 
    }
  ]
}

describe("shipment reducer", () => {
  it("should return the initial state", () => {
    expect(shipmentReducer(undefined, {})).toEqual({
      allShipments: [],
      selectedShipment: {},
    });
  });

  it("should handle GET_SHIPMENTS", () => {
    expect(
      shipmentReducer(INITIAL_STATE, {
        type: types.GET_SHIPMENTS,
        payload: allShipmentmock,
      })
    ).toEqual({
      allShipments: allShipmentmock,
      selectedShipment: {},
    });
  });

    it('should handle SELECT_SHIPMENT', () => {
      expect(
        shipmentReducer(INITIAL_STATE, {
          type: types.SELECT_SHIPMENT,
          payload: selectedShipmentPayload
        })
      ).toEqual(
        {
  allShipments: [],
  selectedShipment: selectedShipmentState,
        }
      ) 

    })
});
