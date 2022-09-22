-- migrate:up
CREATE TABLE carts (
    id INT NOT NULL AUTO_INCREMENT,
    quantity INT NOT NULL,
    users_id INT NOT NULL,
    option_products_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    CONSTRAINT users_id_fkey FOREIGN KEY (users_id) REFERENCES users(id),
    CONSTRAINT option_products_fkey FOREIGN KEY (option_products_id) REFERENCES option_products(id)  
);

-- migrate:down
DROP TABLE carts;
