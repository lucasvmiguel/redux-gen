import React from 'react';
import PropTypes from 'prop-types';

const Example = ({ title }) => (
  <div>
    <h1>{title}</h1>
  </div>
);

Example.propTypes = {
  title: PropTypes.string.isRequired
};

export default Example;