import React from 'react';
import ReactDOM from 'react-dom';
import { Game } from './Game';

it('renders the Game component without crashing', () => {
	ReactDOM.render(<Game />, document.createElement('div'));
});