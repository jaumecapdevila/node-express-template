const cuid = require('cuid');

const cuidMiddleware = (req, res, next) => {
  const requestId = cuid();
  req.id = requestId;
  res.id = requestId;

  next();
};

module.exports = cuidMiddleware;
