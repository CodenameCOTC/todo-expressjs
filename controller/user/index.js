const register = require("./register");
const login = require("./login");
const User = require("../../models/User");

const userController = {
  register,
  login,
  user: (req, res) => {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.json(err));
  }
};

module.exports = userController;
