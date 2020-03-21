const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models').User;


// @desc      Get all users
// @route     GET /api/v1/users
// @access    Private/Admin
exports.getUsers = asyncHandler(async (req,res, next) => {
  const users = await User.findAll({
    include: [{
      model: Reservation
    }]
  })
    .catch(err => {
      res.send('error: ' + err);
    })

  res.status(200).json(users);
});


// @desc      Get single user
// @route     GET /api/v1/users/:id
// @access    Private/Admin
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({
    where: {
      id: req.params.id
    },
    include: [{
      model: Profile
    },
    {
      model: Book
    }],
  })
  .catch(err => {
    res.send('error: ' + err)
  })

  res.status(201).json({
    success: true,
    data: user
  });
})


// @desc      Create user
// @route     POST /api/v1/auth/users
// @access    Private/Admin
exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json(user)
});


// @desc      Update user
// @route     PUT /api/v1/users/:id
// @access    Private/Admin
exports.updateUser = asyncHandler(async (req, res, next) => {

});




