import { dai, usdc, eth } from "../blockchain/contracts";

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

export const updateAccount = async (data) => {
  const { address } = data;
  const daiBalance = await dai.getBalance(address);
  const usdcBalance = await usdc.getBalance(address);
  const ethBalance = await eth.getBalance(address);
  return {
    type: "UPDATE",
    payload: {
      ...data,
      dai: daiBalance,
      usdc: usdcBalance,
      eth: ethBalance,
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
