import './ListTopStories.scss';

import React, { PropTypes } from 'react';
import App from 'grommet/components/App';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Split from 'grommet/components/Split';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Search from 'grommet/components/Search';

const ListTopStories = ({ term, updateTerm, items }) => (
  <App>
      <Header>
          <Title>
              GETTY/IO Apply Test Application
          </Title>
          <Search id="search"
            value={term}
            onDOMChange={updateTerm}
            inline
            fill
            size="medium"
            placeHolder="Hacker News Thread..."/>
      </Header>
      <Split>
          <List>
              {items.map(item =>
                <ListItem>{item}</ListItem>
              )}
          </List>
      </Split>
  </App>);

ListTopStories.propTypes = {
  term: PropTypes.string.isRequired,
  updateTerm: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.number)
};

export default ListTopStories;
