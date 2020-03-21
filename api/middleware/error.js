const ErrorResponse = requrie('../utils/errorResponse');

const errorHandler = (err, req, res, nest) => {
  let error = { ...err };

  error.message = err.message;

  console.log(err);

  if (err.name == 'CastError') {

  }


}

module.exports = errorHandler;