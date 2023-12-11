const loginRequired = function (req, res, next) {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ message: "Usuário não autorizado!!" });
  }
};

module.exports = {
  loginRequired
};
