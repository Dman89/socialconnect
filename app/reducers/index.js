import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import authReducer from './auth_reducer'
import listingsReducer from './listings/listing_reducer'

const rootReducer = combineReducers({
  form: reducer,
  auth: authReducer,
  listings: listingsReducer
});

export default rootReducer;
