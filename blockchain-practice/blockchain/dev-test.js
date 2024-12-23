const Block = require('./block');

const fooBlock = Block.mineBlock(Block.genesis(), 'foo-string');

console.log(fooBlock.toString());






//const block = new Block('foo', 'baar', 'test1', 'test2');

// console.log(block.toString());
// console.log(Block.genesis().toString());