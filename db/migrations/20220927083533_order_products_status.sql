-- migrate:up
CREATE TABLE order_products_status (
    id INT NOT NULL AUTO_INCREMENT,
    status VARCHAR(100) NULL,
    PRIMARY KEY(id)
);

-- migrate:down
DROP TABLE order_products_status;
