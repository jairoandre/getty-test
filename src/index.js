'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TopStories from './containers/TopStories';
import store from './redux/store';
import { Provider } from 'react-redux';
import './default.scss';

const App = () => (
		<div>
			<TopStories/>
		</div>);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('main'));
