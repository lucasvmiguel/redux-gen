import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

export const shallowRender = (Component, props) => {
  const renderer = createRenderer();
  renderer.render(<Component {...props}/>);
  return renderer.getRenderOutput();
};