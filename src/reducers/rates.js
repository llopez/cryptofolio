const ADD_RATE = 'ADD_RATE';
const UPDATE_RATE = 'UPDATE_RATE';
const REMOVE_RATE = 'REMOVE_RATE';

const reducer = (state = {}, { payload, type }) => {
  switch (type) {
    case ADD_RATE:
    case UPDATE_RATE:
      const { symbol, value } = payload;

      return { ...state, [symbol]: value };
    case REMOVE_RATE:
      return (Object
        .keys(state)
        .filter(key => key !== payload.symbol)
        .reduce((m, key) => ({ ...m, [key]: state[key] }), {}))
    default:
      return state;
  }
}

export default reducer;