import NotFound from './NotFound';

import {shallowRender} from '../utils/testing';

const expect = require('chai').expect;

it('NotFound component', function () {
  const props = {message: 'some message'};
  const notFoundComponent = shallowRender(NotFound, props);

  expect(notFoundComponent.props.children.type).to.equal('h1');
  expect(notFoundComponent.props.children.props.children).to.equal('some message');
});