import {
  SELECT_SHIPMENT,
  GET_SHIPMENTS,
  CHANGE_STATUS,
} from "../actions/actionsType";
import axios from "axios";
import _ from "lodash";
export const selectShipment = (data) => {
  return (dispatch) => {
    return axios
      .get(
        `https://api-loadsmart-shipments.netlify.app/shipments/${data.id}.json`
      )
      .then(({ data }) => {
        console.log(data);
        dispatch({
          type: SELECT_SHIPMENT, //
          payload: data,
        });
      })
      .catch(() => {
        //- show error message

        console.log(2);
      });
  };
};

export const getallShipment = () => {
  return (dispatch) => {
    return axios
      .get("https://api-loadsmart-shipments.netlify.app/shipments/all.json")
      .then(({ data }) => {
        const sorted = _.sortBy(data, ["id"]);
        return dispatch({
          type: GET_SHIPMENTS, //
          payload: sorted,
        });
      })
      .catch(() => {
        //- show error message

        console.log(2);
      });
  };
};

export const changeShipmentStatus = (status) => {
  return (dispatch) => {
    return dispatch({
      type: CHANGE_STATUS, //
      payload: status,
    });
  };
};
