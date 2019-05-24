export const addTodo = text => ({ 
  type: 'ADD_TODO', 
  payload: { text }
});

export const completeTodo = id => ({
  type: 'COMPLETE_TODO',
  payload: { id }
});