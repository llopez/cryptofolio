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

export const updateAccount = (account) => {
  return {
    type: "UPDATE",
    payload: {
      ...account
    }
  };
};

export const deleteAccount = (address) => {
  return {
    type: 'DELETE',
    payload: {
      address
    }
  }
}
