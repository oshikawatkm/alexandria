class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrase(this, this.constructoe);
  }
}

module.exports= ErrorResponse;