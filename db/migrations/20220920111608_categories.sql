-- migrate:up
CREATE TABLE categories (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
    CONSTRAINT posts_user_id_fkey FOREIGN KEY (user_id) REFERENCES users(id) 
);

-- migrate:down

