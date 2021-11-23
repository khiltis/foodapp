import {EMAIL_BOX, PASSWORD_BOX, DNAME_BOX, DEMAIL_BOX, DPASSWORD_BOX, DCONTACT_BOX, DADDRESS_BOX, REMAIL_BOX, RPASSWORD_BOX} from './ActionTypes';

export const email_box = input => {
  return{
      type: EMAIL_BOX,
      payload: input,
  };
};

export const password_box = input => {
  return{
      type: PASSWORD_BOX,
      payload: input,
  };
};

export const remail_box = input => {
  return{
      type: REMAIL_BOX,
      payload: input,
  };
};

export const rpassword_box = input => {
  return{
      type: RPASSWORD_BOX,
      payload: input,
  };
};

export const dname_box = input => {
  return {
    type: DNAME_BOX,
    payload: input,
  };
};

export const demail_box = input => {
  return {
    type: DEMAIL_BOX,
    payload: input,
  };
};

export const dpassword_box = input => {
  return {
    type: DPASSWORD_BOX,
    payload: input,
  };
};

export const dcontact_box = input => {
  return {
    type: DCONTACT_BOX,
    payload: input,
  };
};

export const daddress_box = input => {
  return {
    type: DADDRESS_BOX,
    payload: input,
  };
};
