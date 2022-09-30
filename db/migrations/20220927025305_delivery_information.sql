-- migrate:up
CREATE TABLE delivery_information (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    phone_number VARCHAR(100) NOT NULL,
    address VARCHAR(100) NOT NULL,
    arrival_date VARCHAR(50) NULL,
    delivery_method VARCHAR NULL,
    users_id int NOT NULL,
    PRIMARY KEY(id),
    CONSTRAINT delivery_information_users_id_fkey FOREIGN KEY (users_id) REFERENCES users(id)
);

-- migrate:down
DROP TABLE delivery_information;
