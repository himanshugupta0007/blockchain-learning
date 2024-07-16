//import asset lib
const assert = require('assert');
//import ganace - local ether env\local running env
const ganache = require('ganache');
//import web3 lib
const { Web3 } = require('web3');
//provider is the communication channel between our code to Web3
const web3 = new Web3(ganache.provider());
// import compile code
const { interface, bytecode } = require('../compile');

// before starting to write test cases
// we need to fetch all account using ganache and once loaded, we will use one the accound 
// for testing purpose
let accounts;
let inbox;

beforeEach(async () => {
    // all methods of web3 is async
    accounts = await web3.eth.getAccounts();

    //use one of the account to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
            .deploy({data: bytecode, arguments: ["Hi Testing Contracts"]})
            .send({from: accounts[0], gas: 1000000});

});

describe('Inbox', () => {
    it('Deploys Contract', () => {
        console.log(inbox);
    })
})