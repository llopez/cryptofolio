export const addAccount = (name, address) => {
  return {
    type: 'ADD',
    payload: {
      name,
      address,
      dai: 0
    }
  }
}
export const updateAccount = (data) => {
  return {
    type: 'UPDATE',
    payload: {
      ...data
    }
  }
}
export const deleteAccount = (address) => {
  return {
    type: 'DELETE',
    payload: {
      address
    }
  }
}
