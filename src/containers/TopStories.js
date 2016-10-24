import { connect } from 'react-redux';
import { fetchTopStories } from '../redux/actions';
import ListTopStories from '../components/ListTopStories';

const mapStateToProps = (state) => {
  return {
    term: state.topStories.term,
    items: state.topStories.items
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTerm: (evt) => {
      console.log(evt);
      dispatch(fetchTopStories());
    }
  }
};

const TopStories = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTopStories);

export default TopStories;
