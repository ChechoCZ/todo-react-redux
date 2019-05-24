import React from 'react';

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

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);