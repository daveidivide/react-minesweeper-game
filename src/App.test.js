import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders the whole app without crashing', () => {
	ReactDOM.render(<App />, document.createElement('div'));
});