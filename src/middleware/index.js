const jwt = require("jsonwebtoken");

const authMiddleware = function (req, res, next) {
  if (req.headers && req.headers.authorization) {
    jwt.verify(
      req.headers.authorization,
      "0cc175b9c0f1b6a831c399e269772661",
      function (err, decode) {
        if (err) req.user = undefined;

        req.user = decode;
        
        next();
      }
    );
  } else {
    req.user = undefined;
    next();
  }
};

module.exports = authMiddleware;
