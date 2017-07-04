import { doSomeAction } from './example';
import { EXAMPLE_CONSTANT } from '../constants/example';

const expect = require('chai').expect;

it('should do some action', function () {
  expect(doSomeAction()).to.deep.equal({type: EXAMPLE_CONSTANT});
});