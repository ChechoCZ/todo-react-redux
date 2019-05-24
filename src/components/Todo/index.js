import React from 'react';

const Todo = ({ completed, text, onClick }) => (
  <li style={{ textDecoration: completed ? 'line-through' : 'none' }} onClick={onClick}>{ text }</li>
);

export default Todo;