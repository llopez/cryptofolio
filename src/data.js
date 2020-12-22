const assets = ["dai", "usdc", "eth", "bat", "uni", "ethrsi", "ausdc"];
const market = {
  dai: 0.95,
  usdc: 1.03,
  eth: 650,
  bat: 0.22,
  uni: 3.75,
  ethrsi: 403.19,
  ausdc: 1.03
};
const accounts = [
  {
    address: "0x251ca03e54f44951af7d0a60b67b2b5e48cf6b35",
    name: "Ledger #1",
    order: 3
  },
  {
    address: "0x976AA98DC7E2f93DfB0B74B2AafCD2abb05E8F15",
    name: "Meta #1",
    order: 1
  },
  {
    address: '0x47da96c5ad8f22ecb281b8d07749381a6d2d0149',
    name: 'Meta #2',
    order: 2
  },
  {
    address: '0x0bb22b99916b487b6a2699cd265b7bf2e986afb0',
    name: 'Ledger #2',
    order: 4
  },
  {
    address: '0xc3e2a047dffb640ccb76ea7bd7b9a0c1aa62e773',
    name: 'Ledger #3',
    order: 5
  },
  {
    address: '0x95377ac2a0792d5a81c0f8bbdef57f1ac62331cc',
    name: 'Ledger #4',
    order: 6
  },
  {
    address: '0x56b34d9cb321ce38501ee8b26b54f76e21c11bdc',
    name: 'Ledger #5 (white)',
    order: 7
  },
  {
    address: '0x1e270d96deadde32e5b5c643c118373eadec68a0',
    name: 'Ledger #6',
    order: 8
  },
  {
    address: '0x5abb4561db04a0ddf6cdae0c2369536309a8ac48',
    name: 'Ledger #7',
    order: 9
  },
  {
    address: '0x024a5bb9dc1311067a6d9854d1cd797999a842f4',
    name: 'Ledger #8',
    order: 10
  },









].sort((a, b) => a.order - b.order);

export { accounts, assets, market };
