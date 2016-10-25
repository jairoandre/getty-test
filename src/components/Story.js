import React, { PropTypes } from 'react';
import ListItem from 'grommet/components/ListItem';
import Layer from 'grommet/components/Layer';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';
import Paragraph from 'grommet/components/Paragraph';

class Story extends React.Component {

  constructor(props) {
    super(props);
    this.loadFirstKid = this.loadFirstKid.bind(this);
  }

  componentDidMount() {
    this.props.fetchStory(this.props.storyId);
  }

  loadFirstKid() {
    const { story } = this.props;
    if (story.kids && story.kids.length > 0) {
      this.props.fetchFirstKid(story.id, story.kids[0]);
    }
  }

  closeModal() {
    console.log("close modal")
  }

  render() {
    const { story, storyId, kid } = this.props;
    var content = "Loading...";
    if (story) {
      var dialog = (
        <Layer onClose={this.closeModal} closer align="top">
          <Header>
            <Heading tag="h2">
              {kid ? ("By " + kid.by) : "Nothing"}
            </Heading>
          </Header>
          <Section>
            <Paragraph>
              {kid ? kid.text : "Nothing"}
            </Paragraph>
          </Section>
        </Layer>
      );
      content = (
        <div style={{width: "100%"}}>
          {kid ? dialog : <div></div>}
          <a href={story.url}>{story.title}</a>
          <span className="comments" onClick={this.loadFirstKid}>{story.kids ? story.kids.length : 0} - Comentários</span>
        </div>
      )
    }
    return (
      <ListItem>
        {content}
      </ListItem>
    )
  }

}

Story.propTypes = {
  storyId: PropTypes.number.isRequired,
  story: PropTypes.object,
  kid: PropTypes.object,
  fetchStory: PropTypes.func.isRequired,
  fetchFirstKid: PropTypes.func
}

export default Story;
