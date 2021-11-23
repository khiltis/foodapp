import {combineReducers} from 'redux';
import LoginReducers from './LoginReducers';
import DonationReducers from './DonationReducers';

export default combineReducers({
  input: LoginReducers,
  input_value: DonationReducers,
});
