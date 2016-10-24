export const REQUEST_TOPSTORIES = 'REQUEST_TOPSTORIES';
function requestTopStories() {
  return {
    type: REQUEST_TOPSTORIES
  }
}


export const RECEIVE_TOPSTORIES = 'RECEIVE_TOPSTORIES';
function receiveTopStories(items) {
  return {
    type: RECEIVE_TOPSTORIES,
    items
  }
}

export function fetchTopStories() {
  return function(dispatch) {
    dispatch(requestTopStories());
    return fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then(response => response.json())
      .then(topStories => dispatch(receiveTopStories(topStories)));
  }
}
