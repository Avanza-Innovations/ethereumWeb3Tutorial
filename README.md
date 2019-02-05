# Etherum contract basics

This repository shows how to use web3 to deploy, send transactions to contract and query the contract variables.

## Contract
The smart contract used in this demo is contract.sol. It is a simple contract to demostrate the usage of web3. The contract is compiled using remix (http://remix.ethereum.org). After compiling ,the bytecode and abi are obtained from remix are copied to contract.json.

## Configuration
At index.js file change the `RPCAddress` to point to your node. Additionally, change `fromAddress` to match your wallet address. In this example, the wallet is unlocked. In case the wallet is locked, make sure to unlock it before sending the transactions. This can be done using the command 

`web3.eth.personal.unlockAccount(address, password, unlockDuraction [, callback])`

This function returns a promise. 

## Running the application
1. Run `npm install`
2. Make sure you have changed the variables as mentioned in Working part
3. Run `npm start`

