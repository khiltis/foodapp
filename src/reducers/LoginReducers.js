import {EMAIL_BOX, PASSWORD_BOX, DNAME_BOX, DEMAIL_BOX, DPASSWORD_BOX, DCONTACT_BOX, DADDRESS_BOX, REMAIL_BOX, RPASSWORD_BOX} from '../actions/ActionTypes';

const INITIAL_STATE = {
  email: '',
  password: '',
  remail: '',
  rpassword: '',
  dname: '',
  dpassword: '',
  demail: '',
  dcontact: '',
  daddress: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_BOX:
      return {...state, email: action.payload};
    case PASSWORD_BOX:
      return {...state, password: action.payload};
      case REMAIL_BOX:
        return {...state, remail: action.payload};
      case RPASSWORD_BOX:
        return {...state, rpassword: action.payload};
    case DNAME_BOX:
      return {...state, dname: action.payload};
    case DEMAIL_BOX:
      return {...state, demail: action.payload};
    case DPASSWORD_BOX:
      return {...state, dpassword: action.payload};
    case DCONTACT_BOX:
      return {...state, dcontact: action.payload};
    case DADDRESS_BOX:
      return {...state, daddress: action.payload};
    default:
        return state;
   }
 };
