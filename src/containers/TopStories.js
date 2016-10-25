import { connect } from 'react-redux';
import { fetchTopStories, fetchStory, fetchFirstKid, toggleModalVisibility } from '../redux/actions';
import ListTopStories from '../components/ListTopStories';

const mapStateToProps = (state) => {
  return {
    ids: state.topStories.ids,
    stories: state.topStories.stories,
    kids: state.topStories.kids,
    modal: state.topStories.modal
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
    },
    toggleModalVisibility: (storyId) => {
      dispatch(toggleModalVisibility(storyId));
    }
  }
};

const TopStories = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTopStories);

export default TopStories;
