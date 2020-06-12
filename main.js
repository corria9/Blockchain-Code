const SHA256 = require('crypto-js/sha256');

class Block {
	constructor (index, data, previousHash = '') {
		this.index = index;
		this.date = new Date();
		this.data = data;
		this.previousHash = previousHash;
		this.hash = this.createHash();
	}

	createHash () {
		return SHA256(this.index + this.date + this.data).toString();
	}
}


//Objeto que se crea para recoger nuestro blockchain

class BlockChain {
    constructor(genesis) {
        this.chain = [this.createFirstBlock(genesis)];
    }
    createFirstBlock(genesis) {
        return new Block (0, genesis);
    }
    getLastBlock() {
        return this.chain[this.chain.length -1];
    }
    addBlock(data) {
        let prevBlock = this.getLastBlock();
        let block = new Block(prevBlock.index +1, data, prevBlock.hash);
        this.chain.push(block);
    }
}

// block = new Block (0, 'prueba');
// console.log(JSON.stringify(block, null, 2));

let coriaCoin = new BlockChain ('info de genesis');

coriaCoin.addBlock('esta es mi CryptoMoneda!');
coriaCoin.addBlock('Tengo un Valor de 100K pesos');

console.log(JSON.stringify(coriaCoin, null, 2));
