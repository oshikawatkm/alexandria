const asyncHandler = fn => (req, res, nest) => 
  Promise.resolve(fn(req, res, next)).catch(next);

  module.exports = asyncHandler;