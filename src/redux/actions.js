export const REQUEST_TOPSTORIES = 'REQUEST_TOPSTORIES';
function requestTopStories() {
  return {
    type: REQUEST_TOPSTORIES
  }
}


export const RECEIVE_TOPSTORIES = 'RECEIVE_TOPSTORIES';
function receiveTopStories(ids) {
  return {
    type: RECEIVE_TOPSTORIES,
    ids
  }
}


export function fetchTopStories() {
  return function(dispatch) {
    dispatch(requestTopStories());
    return fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(response => response.json())
      .then(ids => {
        dispatch(receiveTopStories(ids))
      });
  }
}


export const REQUEST_STORY = 'REQUEST_STORY';
function requestStory(id) {
  return {
    type: REQUEST_STORY,
    id
  }
}

export const RECEIVE_STORY = 'RECEIVE_STORY';
function receiveStory(id, story) {
  return {
    type: RECEIVE_STORY,
    id,
    story
  }
}

export function fetchStory(id) {
  return function(dispatch) {
    dispatch(requestStory(id));
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(response => response.json())
      .then(story => dispatch(receiveStory(id, story)));
  }
}

export const REQUEST_FIRST_KID = 'REQUEST_FIRST_KID';
function requestFirstKid(storyId, kidId) {
  return {
    type: REQUEST_FIRST_KID,
    storyId,
    kidId
  }
}

export const RECEIVE_FIRST_KID = 'RECEIVE_FIRST_KID';
function receiveFirstKid(storyId, kid) {
  return {
    type: RECEIVE_FIRST_KID,
    storyId,
    kid
  }
}

export function fetchFirstKid(storyId, kidId) {
  return function(dispatch) {
    dispatch(requestFirstKid(storyId, kidId));
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${kidId}.json`)
      .then(response => response.json())
      .then(kid => dispatch(receiveFirstKid(storyId, kid)));
  }
}

export const TOGGLE_MODAL_VISIBILITY = 'TOGGLE_MODAL_VISIBILITY';
export function toggleModalVisibility(storyId) {
  console.log(storyId);
  return {
    type: TOGGLE_MODAL_VISIBILITY,
    storyId
  }
}
