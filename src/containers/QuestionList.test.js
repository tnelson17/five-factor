import React from 'react';
import QuestionList from './QuestionList';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<QuestionList />)
})

it('renders correctly', () => {
  const tree = renderer
    .create(<QuestionList />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
