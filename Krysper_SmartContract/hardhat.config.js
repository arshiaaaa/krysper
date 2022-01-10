require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/suOqe808nSjUY5yLjtTTkv2q2tk9Ggb9',
      accounts: ['0d654b282a6c232b63fc33f380a987adbaa9274aa62cf9ad1f0db1261904e31c'],
    },
  },
};