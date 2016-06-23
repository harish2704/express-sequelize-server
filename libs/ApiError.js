
module.export = function ApiError( message, status ){
  return {
    message: message,
    status: status,
  };
}

