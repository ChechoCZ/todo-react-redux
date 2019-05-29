import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import './App.css';

import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <TodoList />
      <AddTodo />
      <Footer />
    </Provider>
  );
}

export default App;
