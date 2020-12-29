const ADD = 'ADD';
const UPDATE = 'UPDATE';
const DELETE = 'DELETE';

const reducer = (state = {}, { payload, type }) => {
  switch (type) {
    case ADD:
    case UPDATE:
      const { symbol, value } = payload;

      return { ...state, [symbol]: value };
    case DELETE:
      return (Object
        .keys(state)
        .filter(key => key !== payload.symbol)
        .reduce((m, key) => ({ ...m, [key]: state[key] }), {}))
    default:
      return state;
  }
}

export default reducer;