import todos from './todos'
import * as types from '../constants/example'

describe('example reducer', () => {
  it('should handle state', () => {
    const tests = [
      {
        title: 'initial state',
        params: {},
        expected: {}
      }
    ];

    tests.map((t) => expect(t.params.state, t.params.action).toEqual(t.expected));
  });
});
