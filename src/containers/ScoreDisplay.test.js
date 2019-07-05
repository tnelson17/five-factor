import React from 'react';
import ScoreDisplay from './ScoreDisplay';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';

const fakeProps = {
  'score': {
    O: 0,
    C: 0,
    E: 0,
    A: 0,
    N: 0
  },
  'testLength': 30
}

it('renders without crashing', () => {
  shallow(
    <ScoreDisplay
      score={fakeProps.score}
      testLength={fakeProps.testLength}
    />
  )
})

it('renders correctly', () => {
  const tree = renderer
    .create(
      <ScoreDisplay
        score={fakeProps.score}
        testLength={fakeProps.testLength}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
