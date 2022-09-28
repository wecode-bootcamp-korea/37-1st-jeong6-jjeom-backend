-- migrate:up
CREATE TABLE payment_method (
    id INT NOT NULL AUTO_INCREMENT,
    payment_name VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

-- migrate:down
DROP TABLE payment_method