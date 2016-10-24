import './Main.scss';

import React from 'react';
import App from 'grommet/components/App';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Split from 'grommet/components/Split';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Search from 'grommet/components/Search';

export default class Main extends React.Component {

    constructor(props) {
      super(props);
      this.state = {term: "", topstories: []};
      this.updateTerm = this.updateTerm.bind(this);
      this.storiesList = this.storiesList.bind(this);
    }

    componentDidMount() {
      fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        .then((res) => {
          return res.json();
        })
        .then((jsons) => {

          if (jsons && jsons.length >= 10) {
            var topstories = [];
            for (var i = 0; i < 10; i++) {
              topstories[i] = jsons[i];
            }
            this.setState(Object.assign({}, this.state, {topstories: topstories}))
          }
        });
    }

    updateTerm(evt) {
      this.setState(Object.assign({}, this.state, {term: evt.target.value}));
    }

    storiesList() {
      return this.state.topstories.map((i) => {
        return (<ListItem>{i}</ListItem>);
      });
    }

    render() {

        return (
            <App>
                <Header>
                    <Title>
                        GETTY/IO Apply Test Application
                    </Title>
                    <Search id="search" value={this.state.term} onDOMChange={this.updateTerm} inline={true} fill={true} size="medium" placeHolder="Hacker News Thread..."/>
                </Header>
                <Split>
                    <List>
                        {this.storiesList()}
                    </List>
                </Split>
            </App>
        );
    }
}
