import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/f192f87de4b2479bba97c3883cc6cac4"
);

const daiAddress = "dai.tokens.ethers.eth";

const daiAbi = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",

  "function balanceOf(address) view returns (uint)"
];

const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);

const getBalance = async (account) => {
  const res = await daiContract.balanceOf(account);
  return ethers.utils.formatUnits(res, 18);
};

export default {
  getBalance
}