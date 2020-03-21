const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Reccomend = require('../models').Reccomend;


// @desc      Get all reccomends
// @route     GET /api/v1/reccomends
// @access    Public
exports.getReccomends = asyncHandler(async (req, res, next) => {
  const reccomends = await Reccomend.findAll()
    .catch(err => {
      res.send('error: ' + err);
    })

  res.status(200).json(users);
})


// @desc      Get single reccomend
// @route     GET /api/v1/reccomends/:id
// @access    Public
exports.getReccomend = asyncHandler(async (req, res, next) => {
  const reccomend = await Reccomend.findOne({
    where: {
      id: req.params.id
    }
  })
  .catch(err => {
    res.send('error: ' + err)
  })

  res.status(201).json({
    success: true,
    data: reccomend
  });
})


// @desc      Post single reccomend
// @route     POST /api/v1/books/:id/reccomends
// @access    Public
exports.getReccomend = asyncHandler(async (req, res, next) => {
  const reccomend = await Reccomend.findOne({
    where: {
      id: req.params.id
    }
  })
  .catch(err => {
    res.send('error: ' + err)
  })

  res.status(201).json({
    success: true,
    data: reccomend
  });
})


