import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Movie = props => (
  <div>
    <h3>{props.Reactmovie.title}</h3>
  </div>
);

// static propTypes = {
//   movie: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//   }),
// };

export default Movie;
