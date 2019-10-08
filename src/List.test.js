import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

const cards = [{id:'a', title:'title', content:'content'}];

describe('rendering List', () => {

it('renders without crashing', () => {
const div = document.createElement('div');
ReactDOM.render(<List header= 'this is the header' cards= {cards} key='a' />, div);
ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree= renderer
  .create(<List header= 'this is the header' cards= {cards} key='a' />)
  .toJSON();
  expect(tree).toMatchSnapshot();
})

});