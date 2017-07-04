import { EXAMPLE_CONSTANT } from '../constants/example';

const initialState = {title: 'default title'}

export default function example(state = initialState, action) {
  switch (action.type) {
    case EXAMPLE_CONSTANT:
      return {...state};

    default:
      return state
  }
}