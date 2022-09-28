-- migrate:up
CREATE TABLE order_products (
    id INT NOT NULL AUTO_INCREMENT,
    quantity INT NOT NULL,
    option_products_id INT NOT NULL,
    order_id INT NOT NULL,
    order_products_status_id INT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT order_products_option_products_id_fkey FOREIGN KEY (option_products_id) REFERENCES option_products(id),
    CONSTRAINT order_products_order_id_fkey FOREIGN KEY (order_id) REFERENCES orders(id),
    CONSTRAINT order_products_order_products_status_id_fkey FOREIGN KEY (order_products_status_id) REFERENCES order_products_status(id)
);


-- migrate:down
DROP TABLE order_products
