import { combineReducers} from  'redux'

import shipmentReducer from './shipments'; 

export default combineReducers({
  shipment : shipmentReducer,
})
