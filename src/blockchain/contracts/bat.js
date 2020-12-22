import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/f192f87de4b2479bba97c3883cc6cac4"
);

const contractAddress = "0x0d8775f648430679a709e98d2b0cb6250d2887ef";

const contractAbi = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",

  "function balanceOf(address) view returns (uint)"
];

const contract = new ethers.Contract(contractAddress, contractAbi, provider);

const getBalance = async (account) => {
  const res = await contract.balanceOf(account);
  return ethers.utils.formatUnits(res, 18);
};

export default {
  getBalance
}