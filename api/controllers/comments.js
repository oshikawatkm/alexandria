const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Comment = require('../models').Comment;


// @desc      Get comments
// @route     GET /api/v1/comments/:id
// @access    Public
exports.getComments = asyncHandler(async (req, res, next) => {
  const comments = await Comment.findAll()
    .catch(err => {
      res.send('error: ' + err);
    });

  res.status(200).json(comments)
})

// @desc      Get single comment
// @route     GET /api/v1/comments/:id
// @access    Public
exports.getComment = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findOne({
    where: {
      id: req.params.id
    }
  })
  .catch(err => {
    res.send('error: ' + err)
  })

  res.status(200).json(comment)
})


// @desc      Get comments by book
// @route     GET /api/v1/lectures/:id
// @access    Public
exports.getCommentByBook = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findOne({
    where: {
      id: req.params.id
    }
  })
  .catch(err => {
    res.send('error: ' + err)
  })

  res.status(200).json(comment)
})

// @desc      Get comments by book
// @route     GET /api/v1/lectures/:id
// @access    Public
exports.getCommentByBook = asyncHandler(async (req, res, next) => {
  const comment = await Comment.findOne({
    where: {
      id: req.params.id
    }
  })
  .catch(err => {
    res.send('error: ' + err)
  })

  res.status(200).json(comment)
})