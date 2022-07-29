const { List } = require("../models");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");

exports.getList = async (req, res) => {
  try {
    console.log("pint");
    console.log(req.body.point.length);
    let where = {};

    if (req.body.type.length > 0)
      where.type = {
        [Op.in]: req.body.type,
      };

    if (req.body.point.length > 0)
      where.point = {
        [Op.between]: req.body.point,
      };

    const list = await List.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where,
      limit: req.body.size,
      offset: (req.body.page - 1) * req.body.size,
    });

    res.status(200).send({
      status: "Success",
      message: "Get Users Success",
      data: {
        list: list.rows,
        page: req.body.page,
        size: req.body.size,
        type: req.body.type,
        point: req.body.point,
        total_data: list.count,
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
