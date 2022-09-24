-- migrate:up
CREATE TABLE product (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    price INT NOT NULL,
    standard_unit VARCHAR(200) NOT NULL,
    tumbnail_url VARCHAR(2000) NOT NULL,
    description_url VARCHAR(2000) NOT NULL,
    anti_bio BOOLEAN NOT NULL,
    categories_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP, 
    PRIMARY KEY(id),
    CONSTRAINT categories_id_fkey FOREIGN KEY (categories_id) REFERENCES categories(id)
);

-- migrate:down
DROP TABLE product;


