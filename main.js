const SHA256 = require('crypto-js/sha256');

class Block {
	constructor (index, data, previousHash = '') {
		this.index = index;
		this.date = new Date();
		this.data = date;
		this.previousHash = previousHash;
		this.hash = this.createHash();
	}

	createHash () {
		return SHA256(this.index + this.date + this.data);
	}
}

block = new Block (0, 'prueba');
console.log(JSON.stringify(block, null, 2));

npm install crypto-js  --save