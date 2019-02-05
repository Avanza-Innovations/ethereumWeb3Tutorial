const config = require('./contract.json');
const Web3 = require('web3');
const RPCAddress = 'http://localhost:8545';
const web3 = new Web3(RPCAddress);
const fromAddress = '0x4368a0ae1c8011633324bad344d22474658c2655';
const contract = new web3.eth.Contract(config.abi, '', { gasPrice: '12345678', from: fromAddress });
const GAS_PRICE = 4700000;

//Deployment of Contract
async function deploy() {
    const instance = await contract.deploy({
        data: config.byteCode,
        arguments: [] //Constructor params
    })
        .send({
            from: fromAddress,
            gas: GAS_PRICE
           // gasPrice: 0
        });
    return instance;
}

async function start() {
    const instance = await deploy();
    console.log("Contract Address", instance.options.address);
    //Calling the set method
    let response = await instance.methods.setValue("php", "recursive").send({
        from: fromAddress,
        gas: GAS_PRICE,
       // gasPrice: 0
    });
    console.log('\nEvent emitted:', response.events);
    //Calling the get method
    let callResponse = await instance.methods.getValue("php").call();
    console.log("\nCall response", callResponse)
}

start();