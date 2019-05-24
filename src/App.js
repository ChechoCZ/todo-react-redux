import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import './App.css';

import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <TodoList />
      <AddTodo />
    </Provider>
  );
}

export default App;
