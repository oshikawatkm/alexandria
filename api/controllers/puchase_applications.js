const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const PurchaseApplication = require('../models').PurchaseApplication;



// @desc      Get all reccomends
// @route     GET /api/v1/reccomends
// @access    Public
exports.getPurchaseApplications = asyncHandler(async (req, res, next) => {
  const purchase_applications = await PurchaseApplication.findAll()
    .catch(err => {
      res.send('error: ' + err);
    })

  res.status(200).json(purchase_applications);
})



// @desc      Get single reccomend
// @route     GET /api/v1/reccomends/:id
// @access    Public
exports.getReccomend = asyncHandler(async (req, res, next) => {
  const purchaseApplication = await PurchaseApplication.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Book
      },
      {
        model: User
      }
    ]
  })
  .catch(err => {
    res.send('error: ' + err)
  })

  res.status(201).json({
    success: true,
    data: purchaseApplication
  })
})

