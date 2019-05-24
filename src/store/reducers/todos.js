const DEFAULT_TODOS = [
  { id: 1, text: 'Make Cofee', completed: false }, 
  { id: 2, text: 'Learn React/Redux', completed: false }
];

export default function todos(state = DEFAULT_TODOS, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text, completed: false }]
    case 'COMPLETE_TODO':
      return state.map(todo => todo.id === action.payload.id ? { ...todo, completed: true } : todo)
    default:
      return state;
  }
}