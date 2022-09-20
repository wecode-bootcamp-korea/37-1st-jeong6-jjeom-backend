-- migrate:up
CREATE TABLE product_description (
    id INT NOT NULL AUTO_INCREMENT,
    weight VARCHAR(50) NOT NULL,
    orign  VARCHAR(50) NOT NULL,
    expiration int NOT NULL,
    storage VARCHAR(50)
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
    CONSTRAINT posts_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id) 
);

-- migrate:down

