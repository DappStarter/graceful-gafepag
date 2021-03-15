require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'guess narrow flee skull guard render remain umbrella grid clog blue sound'; 
let testAccounts = [
"0x7391d69af87db67bcae01633a6a0a169d0da6cd32d3e1754861dbc009a81f28b",
"0x172a3cf0d3f500c9899ea888ea949796d79deff29d89445697b5b7f3ec7bcc3b",
"0x64fdee5501b1b305c48f6cf55e07cc06b617d257a999450c0cd59c01db7882ef",
"0x723b0b801c97c06d1d5ac3c8d25d29df72f5bbe7fd0c57f87fcbf5035580ecca",
"0x0a5b9711ef5bdf576c888ce355f17374076dc6fc403117b18eda79a45bbcc8a7",
"0x49e7c0ee0d366a36a6164b83daa72d765a06d0efac6eff44f34aaf6b44c0b80a",
"0x4fc8211604266c42105e46ddcf5fb8a466508983501e0d77e303b6964c7280d9",
"0xf8e036f4a5c7befd401cee565d2edcfd9ee04116873f4b5714d5f5be9f868c6a",
"0xc125a325985c64544a90a80b62b9a13e030f8ce0fb4ea2715f148182c3785392",
"0x972bcd09aa9d1c280235660ffb1c95859ac4d1542f61ffe4bc32c7076ad5a3a8"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

