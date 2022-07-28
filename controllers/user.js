const { User } = require("../models");

const bcrypt = require("bcrypt");

exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    if (!user) {
      return res.status(404).send({
        status: "failed",
        message: "Usename atau Password Salah",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Login Success",
      data: {
        token: "hdbiqwg230891ioqrwete4@",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await User.destroy({
      where: { id },
    });

    res.status(200).send({
      status: "Success",
      message: `Delete User id: ${id} Success `,
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
      status: "Delete Failed",
      message: "Server Error",
    });
  }
};
