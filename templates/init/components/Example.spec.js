import Example from './Example';

import { shallowRender } from '../utils/testing';

const expect = require('chai').expect;

it('Example component', function () {
  const props = {title: 'some title'};
  const exampleComponent = shallowRender(Example, props);

  expect(exampleComponent.props.children.type).to.equal('h1');
  expect(exampleComponent.props.children.props.children).to.equal('some title');
});