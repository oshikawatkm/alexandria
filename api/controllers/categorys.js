const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Category = require('../models').Category;

// @desc      Get books
// @route     GET /api/v1/books
// @access    Public
exports.getCategorys = asyncHandler(async (req, res, next) => {
  const categorys = await Category.findAll()
  .catch('error: ' + err);

  res.status(200).json(categorys);
})


// @desc      Get book
// @route     GET /api/v1/books/:id
// @access    Public
exports.getCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Book_Categorys
      },
    ]
  })
})
