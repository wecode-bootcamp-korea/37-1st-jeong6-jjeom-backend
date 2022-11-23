const appDataSource = require("./datasource");

const createDeliveryInformation = async (
  queryRunner,
  userId,
  name,
  phoneNumber,
  address,
  arrivalDate,
  deliveryMethod
) => {
  const result = await queryRunner.query(
    `INSERT INTO delivery_information(
            users_id,
            name,
            phone_number,
            address,
            arrival_date,
            delivery_method
        )VALUES(?, ?, ?, ?, ?, ?)`,
    [userId, name, phoneNumber, address, arrivalDate, deliveryMethod]
  );
  return result;
};

const createOrder = async (queryRunner, deliveryInformationId) => {
  const result = await queryRunner.query(
    `INSERT INTO orders(
            delivery_information_id,
            order_status_id
        )VALUES(?, 1)`,
    [deliveryInformationId]
  );
  return result;
};

const createOrderProducts = async (
  queryRunner,
  optionProductsId,
  orderId,
  quantity
) => {
  const result = await queryRunner.query(
    `INSERT INTO order_products(
            option_products_id,
            order_id,
            quantity,
            order_products_status_id
        )VALUES(?, ?, ?, 1)`,
    [optionProductsId, orderId, quantity]
  );
  return result;
};

const getStockOfOptionProduct = async (
  queryRunner,
  optionProductsId,
  quantity
) => {
  const result = await queryRunner.query(
    `UPDATE
            option_products
        SET
            stock = stock - ?
        WHERE id = ?
        `,
    [optionProductsId, quantity]
  );
  return result;
};

const deleteCartAtOder = async (queryRunner, userId, optionProductsId) => {
  const deleteCartRows = await queryRunner.query(
    `
            DELETE FROM carts
            WHERE users_id = ?
            AND   option_products_id = ?
        `,
    [userId, optionProductsId]
  );
  return deleteCartRows;
};

const getOrderInfo = async (userId, cartId) => {
  const result = await appDataSource.query(
    `
            SELECT
                u.id,
                u.name as userName,
                u.phone_number,
                u.email,
                p.name,
                p.standard_unit,
                p.price,
                op.thick,
                c.quantity
            FROM product p
            JOIN option_products op
            ON p.id = op.product_id
            JOIN carts c
            ON c.option_products_id = op.id 
            JOIN users u
            ON u.id = c.users_id
            WHERE
            u.id = ?
            AND
            c.id IN (?)
        `,
    [userId, cartId]
  );
  return result;
};

const getCompleteInfo = async (queryRunner, userId, optionProductsId) => {
  const result = await queryRunner.query(
    `
        SELECT
            DATE_SUB(delivery_information.arrival_date, interval 1 day) as deadline,
            order_products.quantity,
            product.price
        FROM option_products
        JOIN product
        ON option_products.product_id = product.id
        JOIN order_products
        ON option_products.id = order_products.option_products_id
        JOIN orders
        ON order_products.order_id = orders.id
        JOIN delivery_information
        ON orders.delivery_information_id = delivery_information.id
        JOIN users
        ON delivery_information.users_id = users.id
        WHERE users.id = ?
        AND order_products.id in (?);
        `,
    [userId, optionProductsId]
  );

  return result;
};

module.exports = {
  getOrderInfo,
  getCompleteInfo,
  deleteCartAtOder,
  createOrder,
  createDeliveryInformation,
  getStockOfOptionProduct,
  createOrderProducts,
};
