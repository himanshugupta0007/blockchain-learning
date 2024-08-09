//import asset lib
const assert = require("assert");
//import ganace - local ether env\local running env
const ganache = require("ganache");
//import web3 lib
const { Web3 } = require("web3");
//provider is the communication channel between our code to Web3
const web3 = new Web3(ganache.provider());
// import compile code
const { interface, bytecode } = require("../compile");

// before starting to write test cases
// we need to fetch all account using ganache and once loaded, we will use one the accound
// for testing purpose
let accounts;
let inbox;
let intialMessage = "Hi Testing Contracts";
beforeEach(async () => {
  // all methods of web3 is async
  accounts = await web3.eth.getAccounts();

  //use one of the account to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [intialMessage] })
    .send({ from: accounts[0], gas: 1000000 });
});

describe("Inbox", () => {
  it("Deploys Contract", () => {
    console.log(inbox.options.address);
    assert.ok(inbox.options.address);
  });

  // this tests the message get properties - getMessage or message
  it("has a default message?", async () => {
    // inbox - contrct
    // method - property of contracts - all methods present in contract
    // message - message property
    // call - calls the method proerty
    const message = await inbox.methods.message().call();
    assert.equal(message, intialMessage);
  });

  it("Test Set Message", async () => {
    // setMessage - updating mesage or data in the contract
    // send - sending transaction to the contract with account to pay the money\gas for updating the contract data
    await inbox.methods
      .setMessage("Updated Message")
      .send({ from: accounts[0] });
      const message = await inbox.methods.message().call();
      assert.equal(message, "Updated Message");
  });
});
