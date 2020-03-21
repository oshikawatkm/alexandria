// const ipfs = require('../utils/ipfs');
const fs = require('fs');
const IPFS = require('ipfs-api');
const ipfs = new IPFS({host: 'localhost', port: 5001});
const encryptor = require('file-encryptor');
const crypto = require('crypto');
const key = "Password0011";


encryptor.encryptFile('./test.txt', "encrepted.txt", key, function(err){
  console.log(err);
})

const file = fs.readFileSync('./encrepted.txt');
ipfsUppload(file).then(result => console.log(result))

async function ipfsUppload(file) {
  const result = ipfs.add(file);
  return result;
}