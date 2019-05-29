const DEFAULT_TODOS = [];
let id = 0;

export default function todos(state = DEFAULT_TODOS, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: id++, text: action.payload.text, completed: false }]
    case 'COMPLETE_TODO':
      return state.map(todo => todo.id === action.payload.id ? { ...todo, completed: true } : todo)
    default:
      return state;
  }
}