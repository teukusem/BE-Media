"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "lists",
      [
        {
          type: "voucher",
          image:
            "https://www.gotravelly.com/blog/wp-content/uploads/2019/10/Gunung-Fuji-Jepang-1024x640.jpg",
          point: 500000,
          description: "Voucher Card  IDR 1.000.000",
        },
        {
          type: "product",
          image:
            "https://www.gotravelly.com/blog/wp-content/uploads/2019/10/Gunung-Fuji-Jepang-1024x640.jpg",
          point: 5000000,
          description: "Product Card  IDR 1.000.000",
        },
        {
          type: "gift",
          image:
            "https://www.gotravelly.com/blog/wp-content/uploads/2019/10/Gunung-Fuji-Jepang-1024x640.jpg",
          point: 5000,
          description: "Gift Card  IDR 6.000.000",
        },
        {
          type: "product",
          image:
            "https://www.gotravelly.com/blog/wp-content/uploads/2019/10/Gunung-Fuji-Jepang-1024x640.jpg",
          point: 200000,
          description: "Product Card  IDR 5.000.000",
        },
        {
          type: "voucher",
          image:
            "https://www.gotravelly.com/blog/wp-content/uploads/2019/10/Gunung-Fuji-Jepang-1024x640.jpg",
          point: 500000,
          description: "Gift Card  IDR 1.000.000",
        },
        {
          type: "gift",
          image:
            "https://www.gotravelly.com/blog/wp-content/uploads/2019/10/Gunung-Fuji-Jepang-1024x640.jpg",
          point: 500000,
          description: "Gift Card  IDR 10.000.000",
        },
        {
          type: "voucher",
          image:
            "https://www.gotravelly.com/blog/wp-content/uploads/2019/10/Gunung-Fuji-Jepang-1024x640.jpg",
          point: 500000,
          description: "Gift Card  IDR 1.000.000",
        },
        {
          type: "voucher",
          image:
            "https://www.gotravelly.com/blog/wp-content/uploads/2019/10/Gunung-Fuji-Jepang-1024x640.jpg",
          point: 500000,
          description: "Gift Card  IDR 1.000.000",
        },
        {
          type: "voucher",
          image:
            "https://www.gotravelly.com/blog/wp-content/uploads/2019/10/Gunung-Fuji-Jepang-1024x640.jpg",
          point: 500000,
          description: "Gift Card  IDR 1.000.000",
        },
        {
          type: "voucher",
          image:
            "https://www.gotravelly.com/blog/wp-content/uploads/2019/10/Gunung-Fuji-Jepang-1024x640.jpg",
          point: 500000,
          description: "Gift Card  IDR 1.000.000",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("lists", null, {});
  },
};
