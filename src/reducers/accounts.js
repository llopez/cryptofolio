const ADD = 'ADD';

const reducer = (state = [], { payload, type }) => {
  switch (type) {
    case ADD:
      return [...state, payload];
    default:
      return state;
  }
}

export default reducer;