export const REQUEST_STORIES = 'REQUEST_STORIES';
function requestStories() {
  return {
    type: REQUEST_STORIES
  }
}


export const RECEIVE_STORIES = 'RECEIVE_STORIES';
function receiveStories(items) {
  return {
    type: RECEIVE_STORIES,
    items
  }
}

export function fetchTopStories() {
  dispatch(requestTopStories());
  return fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then(response => response.json())
    .then(topStories => dispatch(receiveTopStories(topStories)));
}
