import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './styles.css';

const Footer = ({ total, done }) => (
  <div className="todo-footer">
    <p>Done Tasks: {done}</p>
    <p>Total Tasks: {total}</p>
  </div>
);

Footer.propTypes = {
  done: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired  
}

const mapStateToProps = state => ({
  done: state.todos.filter(todo => todo.completed).length,
  total: state.todos.length,  
});

export default connect(mapStateToProps)(Footer);