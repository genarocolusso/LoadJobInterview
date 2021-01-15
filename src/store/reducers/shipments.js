import {
  SELECT_SHIPMENT,
  GET_SHIPMENTS,
  CHANGE_STATUS,
} from "../actions/actionsType";

const INITIAL_STATE = {
  allShipments: [],
  selectedShipment: {},
};

const shipmentReducer = (state = INITIAL_STATE, action) => {
  if (action.type === SELECT_SHIPMENT) {
    return {
      ...state,
      selectedShipment: {
        ...action.payload,
        stops: action.payload.stops.map((el, idx) => ({
          ...el,
          uid: idx,
        })),
      },
    };
    // overrides  state, creates uid for stops lits keys
  }
  if (action.type === GET_SHIPMENTS) {
    return { ...state, allShipments: action.payload };
    // overrides  state
  }

  if (action.type === CHANGE_STATUS) {
    return {
      ...state,
      selectedShipment: { ...state.selectedShipment, status: action.payload },
    };
    // overrides  state
  }

  return state;
};

export default shipmentReducer;
