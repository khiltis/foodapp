import {NAME, EMAIL, TYPE, DATE, CONTACT, ADDRESS} from '../actions/ActionTypes';

const INITIAL_STATE = {
  femail: '',
  fdname: '',
  ftype: '',
  fdate: '',
  fcontact: '',
  faddress: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAME:
      return {...state, fname: action.payload};
    case EMAIL:
      return {...state, femail: action.payload};
    case DATE:
      return {...state, fdate: action.payload};
    case TYPE:
      return {...state, ftype: action.payload};
    case CONTACT:
      return {...state, fcontact: action.payload};
    case ADDRESS:
      return {...state, faddress: action.payload};
    default:
        return state;
   }
 };
