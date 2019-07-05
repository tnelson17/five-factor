import React from 'react';
import Score from './Score';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import descriptions from '../descriptions.js'

it('renders without crashing', () => {
  shallow(
    <Score
      score={0}
      domainKey={'O'}
      domain={"Openness to Experience"}
      max={24}
    />
  )
})

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Score
        score={0}
        domainKey={'O'}
        domain={"Openness to Experience"}
        max={24}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
