import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../../store/actions/todos';

import './styles.css';

const AddTodo = ({ addTodo }) => {
  let newTodo;

  return (
    <form onSubmit={e => {
      e.preventDefault()
      addTodo(newTodo.value)
      newTodo.value = ''
      }
    } >
      <input type="text" ref={node => (newTodo = node)} placeholder="New To Do!" />
      <button type="submit">Add To Do</button>
    </form>
  )
};

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(null, mapDispatchToProps)(AddTodo);