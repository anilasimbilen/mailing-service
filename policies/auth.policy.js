const configurations = require("../config.json");

module.exports = (req, res, next) => {
  console.log(req.headers);
  if (req.headers.secretkey !== configurations.secret_key) {
    return res.status(402).json({ msg: "Unauthorized" });
  }
  return next();
};
