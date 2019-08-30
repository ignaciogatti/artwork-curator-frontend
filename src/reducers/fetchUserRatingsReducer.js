import {FETCH_USER_RATINGS, SAVE_DATA} from '../actions/types'

const INITIAL_STATE = [];

export default (state=INITIAL_STATE, action) => {
  switch (action.type){
      case FETCH_USER_RATINGS:
          return [...action.payload.data];
      case SAVE_DATA:
          return [...state, action.payload.data];
      default:
          return state;
  }

};