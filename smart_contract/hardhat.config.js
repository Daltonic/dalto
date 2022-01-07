// https://eth-ropsten.alchemyapi.io/v2/q7hRmzHPA_6wAm9gLccSPAWagX6cUmGC
require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/q7hRmzHPA_6wAm9gLccSPAWagX6cUmGC',
      accounts: [
        'f65217e309f18dcf944ed69012007f3a441fe6b358285252c294e6ccafccec66',
      ],
    },
    localhost: {
      url: 'http://127.0.0.1:7545',
      accounts: [
        '07cbb06441d84492c405c2b779b4ef752494298bc658750a28cf76fa111a8d69',
      ],
    },
  },
}
