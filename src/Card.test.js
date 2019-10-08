import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card'
import STORE from './STORE'

describe('rendering Card', () => {

it('renders without crashing', () => {
const div = document.createElement('div');
ReactDOM.render(<Card title='Hello' content= 'World' />, div);
ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const tree = renderer
    .create(<Card 
      key={STORE.allCards.a.id} 
      title={STORE.allCards.a.title} 
      content={STORE.allCards.a.content}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

});