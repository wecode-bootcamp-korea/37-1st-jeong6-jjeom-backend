-- migrate:up
CREATE TABLE product_description (
    id INT NOT NULL AUTO_INCREMENT,
    weight VARCHAR(200) NOT NULL,
    birth VARCHAR(200) NOT NULL,
    expiration VARCHAR(200) NOT NULL,
    storage VARCHAR(200) NOT NULL,
    product_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    CONSTRAINT product_id_fkey FOREIGN KEY (product_id) REFERENCES product(id)
);

-- migrate:down
DROP TABLE product_description;
