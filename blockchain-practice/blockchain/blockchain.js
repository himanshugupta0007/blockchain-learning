const Block = require("./block");

//BlockChain Class
class BlockChain {
  constructor() {
    //chain of blocks
    this.chain = [Block.genesis()];
  }

  //adding block to the chain
  addBlock(data) {
    //getting last block in the chain
    const newBlock = Block.mineBlock(this.chain[this.chain.length - 1], data);
    this.chain.push(newBlock);
    return newBlock;
  }

  // this function validates the chain adding to the Block chain
  isValidChain(chain) {
    //check for genesis block
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) {
      return false;
    }

    // traverse the chain to validate the has
    // last block hash should be same as next block hash
    // or, the block's hash is not correct
    for (let i = 1; i < chain.length; i++) {
      const block = chain[i];
      const lastBlock = chain[i - 1];
      if (
        block.lastHash !== lastBlock.hash ||
        block.hash !== Block.blockHash(block)
      ) {
        return false;
      }
    }
    return true;
  }

  // this method replaces the existing chain
  replaceChain(newChain) {
    if (newChain.length <= this.chain.length) {
      console.log("Received chain is not longer than the current chain.");
      return;
    } else if (!this.isValidChain(newChain)) {
      console.log("The received chain is not valid.");
      return;
    }

    console.log("Replacing blockchain with the new chain.");
    this.chain = newChain;
  }
}

module.exports = BlockChain;
