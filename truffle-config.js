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

/**
 * truffle migrate --reset --network besu
 * truffle console --network besu
 * accounts --> privateKeys
 * const storage = await Storage.deployed()
 * storage
 * strage.set(10)
 * starage.data()
 * const data = await storage.data()
 * data
 */

module.exports = {
  contracts_directory: "./contracts",
  contracts_build_directory: "./build/contracts",
  
  // dashboard: {
  //   port: 24012,
  // },
  networks: {
    development: {
     host: "127.0.0.1",   
     port: 8545,            
     network_id: "*",      
    },
    // Hyperledger Besu network configuration
    besu: {
      provider: HDProvider,
      network_id: "*",
      // gasLimit: "0x47b760",
      // gas: "0x1ffffffffffffe",
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
