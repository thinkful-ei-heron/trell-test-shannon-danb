import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';


it('renders without crashing', () => {
const div = document.createElement('div');
const cards = [{id:'a', title:'title', content:'content'}];
ReactDOM.render(<List header= 'this is the header' cards= {cards} key='a' />, div);
ReactDOM.unmountComponentAtNode(div);
});



