const cuid = require('cuid');

const cuidMiddleware = (req, res, next) => {
  const requestId = cuid();
  req.locals.requestId = requestId;
  res.locals.requestId = requestId;

  next();
};

module.exports = cuidMiddleware;
