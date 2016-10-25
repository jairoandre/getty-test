import { combineReducers } from 'redux';

import {
  REQUEST_TOPSTORIES,
  RECEIVE_TOPSTORIES,
  REQUEST_STORY,
  RECEIVE_STORY,
  REQUEST_FIRST_KID,
  RECEIVE_FIRST_KID,
  TOGGLE_MODAL_VISIBILITY } from './actions';

function topStories(state = {ids: [], loading: false, stories: {}, kids: {}, modal: {}}, action) {
  switch(action.type) {
    case REQUEST_TOPSTORIES:
      return Object.assign({}, state, { loading: true });
    case RECEIVE_TOPSTORIES:
      return Object.assign({}, state, { loading: false, ids: action.ids.slice(0, 10) });
    case REQUEST_STORY:
      return Object.assign({}, state, {loading: true });
    case RECEIVE_STORY:
      var stories = Object.assign({}, state.stories);
      var modal = Object.assign({}, state.modal);
      stories[action.id] = action.story;
      modal[action.id] = false;
      return Object.assign({}, state, {stories : stories, modal: modal})
    case REQUEST_FIRST_KID:
      return Object.assign({}, state, {loading: true });
    case RECEIVE_FIRST_KID:
      var kids = Object.assign({}, state.kids)
      kids[action.storyId] = action.kid;
      return Object.assign({}, state, { loading: false, kids : kids})
    case TOGGLE_MODAL_VISIBILITY:
      var modal = Object.assign({}, state.modal);
      modal[action.storyId] = !state.modal[action.storyId];
      return Object.assign({}, state, { modal: modal });
    default:
      return state;
  }
}
const rootReducer = combineReducers({topStories});

export default rootReducer;
