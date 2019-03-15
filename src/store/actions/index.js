
let autoId = 3;

export const addTodoAction = (name) => ({
  type: 'ADD_TODO_ACTION',
  id: autoId++,
  name
});

export const toggleTodoAction = (id) => ({
  type: 'TOGGLE_TODO_ACTION',
  id
});

