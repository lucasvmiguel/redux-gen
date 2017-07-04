import React from 'react';

const Example = ({title}) => (
  <div>
    <h1>{title}</h1>
  </div>
);

Example.propTypes = {
  title: PropTypes.string.isRequired
};

export default Example;