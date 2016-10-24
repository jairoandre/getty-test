'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TopStories from './containers/TopStories';
import store from './redux/store';
import { Provider } from 'react-redux';

const App = () => (
		<div>
			<TopStories/>
		</div>);

console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('main'));
