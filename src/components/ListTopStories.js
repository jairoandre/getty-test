import React, { PropTypes } from 'react';
import App from 'grommet/components/App';
import List from 'grommet/components/List';
import Split from 'grommet/components/Split';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Search from 'grommet/components/Search';
import Story from './Story';

class ListTopStories extends React.Component {

    componentDidMount() {
      this.props.fetchTopStories();
    }

    render() {

      const { fetchStory, fetchFirstKid, ids, stories, kids, modal, toggleModalVisibility } = this.props;

      return (
        <App>
            <Header>
                <Title>
                    Hacker News API
                </Title>
            </Header>
            <Split>
                <List>
                    {ids.map((id, idx) =>
                      <Story key={idx} storyId={id} story={stories[id]} kid={kids[id]} showModal={modal[id]} fetchStory={fetchStory} fetchFirstKid={fetchFirstKid} toggleModalVisibility={toggleModalVisibility}/>
                    )}
                </List>
            </Split>
        </App>
      )

    }
}

ListTopStories.propTypes = {
  fetchTopStories: PropTypes.func.isRequired,
  fetchStory: PropTypes.func.isRequired,
  fetchFirstKid: PropTypes.func.isRequired,
  ids: PropTypes.arrayOf(PropTypes.number),
  stories: PropTypes.object.isRequired,
  kids: PropTypes.object.isRequired,
  toggleModalVisibility: PropTypes.func,
  modal: PropTypes.object.isRequired
};

export default ListTopStories;
