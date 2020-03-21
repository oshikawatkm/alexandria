const encryptor = require('file-encryptor');
const crypto = require('crypto');
const key = "Password0011";
const fs = require('fs');

const file = fs.readFileSync('./test.txt');
encryptor.encryptFile('./test.txt', "encrepted.txt", key) 
