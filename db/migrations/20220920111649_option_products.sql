-- migrate:up
CREATE TABLE option_products (
    id INT NOT NULL AUTO_INCREMENT,
    thick VARCHAR(50) NOT NULL,
    stock int NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
    CONSTRAINT posts_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id) 
);

-- migrate:down

