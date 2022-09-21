-- migrate:up
CREATE TABLE delivery_information (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    phonenumber VARCHAR(200) NOT NULL,
    address VARCHAR(200) NOT NULL,
    arrival_date VARCHAR(200) NOT NUll,
    buy_method BOOLEAN NOT NULL,
    carts_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    CONSTRAINT delivery_information_id_fkey FOREIGN KEY (carts_id) REFERENCES carts(id)
);




-- migrate:down
DROP TABLE delivery_information;