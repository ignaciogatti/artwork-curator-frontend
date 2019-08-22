import {FETCH_EXPERIMENT_DATA} from '../actions/types'

const INITIAL_STATE = {};

export default (state=INITIAL_STATE, action) => {
  switch (action.type){
      case FETCH_EXPERIMENT_DATA:
          return {...action.payload};
      default:
          return state;
  }

};