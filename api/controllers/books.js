const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const encryptor = require('file-encryptor');
const crypto = require('crypto');
const ipfs = require('../utiles/ipfs')
const Book = require('../models').Book;
const Key = require('../models').Key;


// @desc      Get books
// @route     GET /api/v1/books
// @access    Public
exports.getBooks = asyncHandler(async (req, res, next) => {
  const books = await Book.findAll({
    include: Book
  })
  .catch('error: ' + err);

  res.status(200).json(books);
})


// @desc      Get book
// @route     GET /api/v1/books/:id
// @access    Public
exports.getBook = asyncHandler(async (req, res, next) => {
  const book = await Book.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: User
      },
      {
        model: Comment
      },
      {
        model: PurchaseApplication
      },
      {
        model: Reccomend
      }
    ]
  })
})


// @desc      POST books
// @route     GET /api/v1/books
// @access    Private
exports.postBook = asyncHandler(async (req, res, next) => {
  const { title, bookFile, key, description } = req.body;

  const encryptedResult = encryptor.encryptFile(bookFile, key).catch(error)
  const keyHash = crypto.createHash(key);
  const result = await ipfs.add(bookFile);
  const hash = result[0].hash;
  const timestamp = Math.round(+new Date() / 1000);
  let uploaded = await constract.methods.registerBook(hash, keyHash);

  const book = await Book.create({
    title: title,
    hash: result[0].hash,
    description: description,
    price: price,
    user_id: req.user.id
  });

  const key = await Key.create({
    file: "",
    hash: keyHash,
    user_id: req.user.id,
    book_id: book.id
  })
  
  res.status(201).json(book);
})


// @desc      Dowbload book from ipfs
// @route     GET /api/v1/books/:id/download
// @access    Private
exports.downloadBook = asyncHandler(async (req, res, next) => {
  
})
