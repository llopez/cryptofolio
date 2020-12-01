export const addAccount = (name) => {
  return {
    type: 'ADD',
    payload: {
      name
    }
  }
}
