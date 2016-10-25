import { connect } from 'react-redux';
import { fetchTopStories, fetchStory, fetchFirstKid } from '../redux/actions';
import ListTopStories from '../components/ListTopStories';

const mapStateToProps = (state) => {
  return {
    ids: state.topStories.ids,
    stories: state.topStories.stories,
    kids: state.topStories.kids
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTopStories: () => {
      dispatch(fetchTopStories());
    },
    fetchStory: (id) => {
      dispatch(fetchStory(id));
    },
    fetchFirstKid: (storyId, kidId) => {
      dispatch(fetchFirstKid(storyId, kidId));
    }
  }
};

const TopStories = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTopStories);

export default TopStories;
