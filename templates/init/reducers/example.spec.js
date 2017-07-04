import example from './example';
import { EXAMPLE_CONSTANT } from '../constants/example';

describe('Example reducer', () => {
  it('Should handle state', () => {
    const tests = [
      {
        title: 'initial state',
        params: {state: {}, action: {}},
        expected: {}
      },
      {
        title: 'initial state',
        params: {state: {}, action: {type: EXAMPLE_CONSTANT}},
        expected: {}
      }
    ];

    tests.map((t) => expect(example(t.params.state, t.params.action)).toEqual(t.expected));
  });
});
