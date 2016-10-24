import { combineReducers } from 'redux';

import { REQUEST_TOPSTORIES, RECEIVE_TOPSTORIES } from './actions';

function topStories(state = {items: [], loading: false, term: ""}, action) {
  switch(action.type) {
    case REQUEST_TOPSTORIES:
      return Object.assign({}, state, { loading: true });
    case RECEIVE_TOPSTORIES:
      return Object.assign({}, state, { loading: false, items: action.items });
    default:
      return state;
  }
}
const rootReducer = combineReducers({topStories});

export default rootReducer;
