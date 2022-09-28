-- migrate:up
CREATE TABLE orders (
    id INT NOT NULL AUTO_INCREMENT,
    deposit_deadline DATE NOT NULL,
    payment_method_id INT NOT NULL,
    order_status_id INT NOT NULL,
    delivery_information_id INT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT order_payment_method_id_fkey FOREIGN KEY (payment_method_id) REFERENCES payment_method(id),
    CONSTRAINT order_order_status_id_fkey FOREIGN KEY (order_status_id) REFERENCES order_status(id),
    CONSTRAINT order_delivery_information_id_fkey FOREIGN KEY (delivery_information_id) REFERENCES delivery_information(id)
);

-- migrate:down
DROP TABLE order
s