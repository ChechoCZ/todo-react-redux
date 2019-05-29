import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../../store/actions/todos';

import './styles.css';

import Todo from '../Todo';

const TodoList = ({ todos, completeTodo }) => (
  <div className="todo">
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => completeTodo(todo.id)} /> ))}
    </ul>  
  </div>  
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool
  })).isRequired
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);