'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TopStories from './containers/TopStories';
import store from './redux/store';
import { Provider } from 'react-redux';
import PostForm from './components/PostForm';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Box from 'grommet/components/Box';
import './default.scss';

const App = () => (
		<div>
			<Tabs>
			  <Tab title="List (GET)">
			    <TopStories/>
			  </Tab>
			  <Tab title="Form (POST)">
					<Box alignContent="center" align="center">
			    	<PostForm/>
					</Box>
			  </Tab>
			</Tabs>
		</div>);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('main'));
