import React from 'react';
import PropTypes from 'prop-types';

const NotFound = ({message}) => (
  <div>
    <h1>{message}</h1>
  </div>
);

NotFound.propTypes = {
  message: PropTypes.string.isRequired
};

export default NotFound;