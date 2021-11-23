import {NAME, EMAIL, DATE, TYPE, CONTACT, ADDRESS} from './ActionTypes';

export const name = input => {
  return{
      type: NAME,
      payload: input,
  };
};

export const email = input => {
  return{
      type: EMAIL,
      payload: input,
  };
};

export const date = input => {
  return{
      type: DATE,
      payload: input,
  };
};

export const type = input => {
  return{
      type: TYPE,
      payload: input,
  };
};

export const contact = input => {
  return{
      type: CONTACT,
      payload: input,
  };
};

export const address = input => {
  return{
      type: ADDRESS,
      payload: input,
  };
};
