import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ completed, text, onClick }) => (
  <li style={{ textDecoration: completed ? 'line-through' : 'none' }} onClick={onClick}>{ text }</li>
);

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Todo;