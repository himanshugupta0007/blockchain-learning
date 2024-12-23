const BlockChain = require("./blockchain");
const Block = require("./block");

describe("Blockchain testing", () => {
  let blockchain;
  let blockchain2;

  beforeEach(() => {
    blockchain = new BlockChain();
    blockchain2 = new BlockChain();
  });

  it("should start with genesis block", () => {
    expect(blockchain.chain[0]).toEqual(Block.genesis());
  });

  it("adds new block", () => {
    const data = "foo";
    blockchain.addBlock(data);
    expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(data);
  });

  it("validates a valid chain", () => {
    blockchain2.addBlock("foo");
    console.log("Block Chain 2", blockchain2);
    expect(blockchain.isValidChain(blockchain2.chain)).toBe(true);
  });

  it("invalidates the chain with corrupt genesis block", () => {
    blockchain2.chain[0].data = "bad data";
    expect(blockchain.isValidChain(blockchain2.chain)).toBe(false);
  });

  it("invalidates the corrupt chain", () => {
    blockchain2.addBlock("foo");
    blockchain2.chain[1].data = "not foo";
    expect(blockchain.isValidChain(blockchain2.chain)).toBe(false);
  });

  it("replaces the chain with valid chain", ()=> {
    blockchain2.addBlock("goo");
    blockchain.replaceChain(blockchain2.chain);
    expect(blockchain.chain).toEqual(blockchain2.chain);
  });

  it("does not replace the chain with one of less than or equal to length", ()=> {
    blockchain.addBlock("goo");
    blockchain.replaceChain(blockchain2.chain);
    expect(blockchain.chain).not.toEqual(blockchain2.chain);
  });
  
});
