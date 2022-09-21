-- migrate:up
CREATE TABLE option_products (
    id INT NOT NULL AUTO_INCREMENT,
    thick VARCHAR(50) NOT NULL,
    stock INT NOT NULL,
    product_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id), 
    CONSTRAINT option_products_id_fkey FOREIGN KEY (product_id) REFERENCES product(id)
);


-- migrate:down
DROP TABLE option_products;
