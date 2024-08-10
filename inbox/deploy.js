const { Web3 } = require('web3');
const { interface, bytecode } = require("./compile");
const HDWalletProvider = require("@truffle/hdwallet-provider");

// creating the provider to connect with our network
// fist - password to your wallet
// infura API link

const provider = new HDWalletProvider(
  "frame theme leave setup spell target lift muscle action canvas olympic roof",
  "https://sepolia.infura.io/v3/3d4658faca7e47a088adb1906b156b7a"
);

// now provide the provider cretaed to Web3 instance
const web3 = new Web3(provider);

// creating a async function to deploy the contract
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy contract using account: ", accounts[0]);

  //use one of the account to deploy the contract
  const result = await new web3.eth.Contract(JSON.parse(interface))
    // data - bytecode of the contract and argument is initial argument for contract
    .deploy({ data: bytecode, arguments: ["intialMessage"] })
    .send({ from: accounts[0], gas: 1000000 });

    console.log("Contract Deployed to: ", result.options.address);

    //0x432a3eBB795C82849bCe95B4AA5e53DB74532fD5 - where contract is deployed

    provider.engine.stop();
};

// calling the function to deploy the contract
deploy();
