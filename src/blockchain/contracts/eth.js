import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/f192f87de4b2479bba97c3883cc6cac4"
);

const getBalance = async (account) => {
  const res = await provider.getBalance(account);
  return ethers.utils.formatEther(res);
};

export default {
  getBalance
}