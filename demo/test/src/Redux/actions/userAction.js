import {LOGIN} from './actions';

export const userLogin = name => dispatch => {
  dispatch({
    type: LOGIN,
    payload: name,
  });
};
