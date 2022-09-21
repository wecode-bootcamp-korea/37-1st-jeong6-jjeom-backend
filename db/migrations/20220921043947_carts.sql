-- migrate:up
CREATE TABLE carts (
    id INT NOT NULL AUTO_INCREMENT,
    quantity INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    users_id INT NOT NULL,
    option_products_id INT NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT carts_user_id_fkey FOREIGN KEY (users_id) REFERENCES users(id),
    CONSTRAINT carts_option_products_id_fkey FOREIGN KEY (option_products_id) REFERENCES option_products(id)  
);


-- migrate:down
DROP TABLE carts;
