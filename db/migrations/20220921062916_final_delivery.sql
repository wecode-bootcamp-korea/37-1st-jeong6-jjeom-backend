-- migrate:up
CREATE TABLE final_delivery (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    account VARCHAR(200) NOT NULL,
    deposit_deadline VARCHAR(200) NOT NULL,
    delivery_information_id INT NOT NUll,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id), 
    CONSTRAINT final_delivery_id_fkey FOREIGN KEY (delivery_information_id) REFERENCES delivery_information(id)
);



-- migrate:down
DROP TABLE final_delivery;
