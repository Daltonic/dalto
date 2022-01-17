require('@nomiclabs/hardhat-waffle')
    module.exports = {
    solidity: '0.8.0',
    networks: {
        rinkeby: {
        url: '<YOUR_ALCHEMY_APP_URL_GOES_HERE>',
        accounts: [
            '<YOUR_RINKEBY_ACCOUNT_PRIVATE_KEY_GOES_HERE>',
        ],
        },
    },
   }