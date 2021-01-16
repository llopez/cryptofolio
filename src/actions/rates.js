
export const addRate = (symbol, value) => (
  {
    type: 'ADD_RATE',
    payload: {
      symbol,
      value
    }
  }
)