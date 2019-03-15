const defaultState = [
  {
    id: 1,
    name: "Item 1",
    done: true
  },
  {
    id: 2,
    name: "Item 2",
    done: false
  }
];

const todos =  (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO_ACTION':
      console.log('state', state);
      console.log('action', action);
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          done: false
        }
      ]
    case 'TOGGLE_TODO_ACTION':
      console.log('action', action);
      return state.map((item) => (
        (item.id === action.id) ? {...item, done: !item.done } : item
        )
      )
    default:
      return state;
  }
};

export default todos;
