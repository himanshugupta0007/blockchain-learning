const SHA256 = require('crypto-js/sha256')

/**
 * Block Class in Block Chainl̥
 */
class Block{

    constructor(timestamp, lastHash, hash, data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    static genesis(){
        return new this('Genesis Time', '----', 'f1r57-h45h', []);
    }

    static mineBlock(lastBlock, data){
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = 'todo-hash';
        return new this(timestamp, lastHash, hash, data);
    }

    //this method 
    static blockHash(timestamp, lastHash, data){
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }

    toString(){
        return `Block -
        Timestamp : ${this.timestamp}
        Last Hash : ${this.lastHash.substring(0,10)}
        Hash      : ${this.hash.substring(0,10)}
        Data      : ${this.data}`;
    }
}

module.exports = Block;
