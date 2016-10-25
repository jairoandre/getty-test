import * as actions from '../src/redux/actions';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('actions.js', () => {
    it('should create an action to request top stories', () => {
      const expectedAction = {
        type: actions.REQUEST_TOPSTORIES
      }
      expect(actions.requestTopStories()).to.eql(expectedAction);
    });

    it('should create an action to receive stories', () => {
      const ids = [1, 2, 3];
      const expectedAction = {
        type: actions.RECEIVE_TOPSTORIES,
        ids
      };
      expect(actions.receiveTopStories(ids)).to.eql(expectedAction);
    });
});

describe('actions.js async', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates RECEIVE_TOPSTORIES when fetching stories has been done', () => {
    nock('https://hacker-news.firebaseio.com')
      .get('/v0/topstories.json')
      .reply(200, [1, 2, 3, 4]);

    const expectedActions = [
      { type: actions.REQUEST_TOPSTORIES },
      { type: actions.RECEIVE_TOPSTORIES, ids: [1, 2, 3, 4] }
    ];

    const store = mockStore({ ids: [] });
    return store.dispatch(actions.fetchTopStories())
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });

});
