const ADD = 'ADD';
const UPDATE = 'UPDATE';
const DELETE = 'DELETE';

const reducer = (state = [], { payload, type }) => {
  switch (type) {
    case ADD:
      return [...state, payload];
    case UPDATE:
      return [
        ...state.filter(({ address }) => payload.address !== address),
        payload
      ].sort((a, b) => a.order - b.order)
    case DELETE:
      return state.filter(({ address }) => payload.address !== address)
    default:
      return state;
  }
}

export default reducer;