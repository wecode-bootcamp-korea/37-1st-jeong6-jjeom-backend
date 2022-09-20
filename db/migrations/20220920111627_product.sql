-- migrate:up
CREATE TABLE product (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    price int NOT NULL,
    description_url VARCHAR(2000) NULL,
    anti_bio boolean NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
    CONSTRAINT posts_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id) 
);

-- migrate:down

