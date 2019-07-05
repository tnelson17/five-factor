import React from 'react';
import Question from './Question';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Question />)
})

it('renders correctly', () => {
  const tree = renderer
    .create(<Question />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
