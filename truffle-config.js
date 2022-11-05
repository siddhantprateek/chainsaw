const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKeys = [
  '0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63',
  '0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3',
  '0xae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f'
];

const HDProvider = new HDWalletProvider(
  privateKeys,
  'http://127.0.0.1:8545',
  0,
  3
);

module.exports = {
  contracts_directory: "./contracts",
  contracts_build_directory: "./client/src/build/contract",
  networks: {
    // development: {
    //  host: "127.0.0.1",     // Localhost (default: none)
    //  port: 7545,            // Standard Ethereum port (default: none)
    //  network_id: "*",       // Any network (default: none)
    // },
    // Hyperledger Besu network configuration
    besu: {
      provider: HDProvider,
      network_id: "*",
    }
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.15", 
      settings: {  
       optimizer: {
         enabled: false,
         runs: 200
       },
      //  evmVersion: "byzantium"
      }
    }
  }
}
