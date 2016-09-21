import * as actionTypes from '../actions/ContactActions';
import Immutable from 'immutable';
import {combineReducers} from 'redux';

const initialState = Immutable.List([]);

const contacts = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_CONTACT:
      return state.push(Immutable.Map(action.contact));
    default:
      return state;
  }
}

export default contacts;
