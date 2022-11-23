const { ethers } = require('ethers');

module.exports = {
  humanReadableABI: new ethers.utils.Interface([
    "function mint(address, uint256)",
    'function symbol() view returns(string)',
    'function balanceOf(address) view returns (uint256)',
    'function totalSupply() view returns (uint256)',
  ]),
};

 