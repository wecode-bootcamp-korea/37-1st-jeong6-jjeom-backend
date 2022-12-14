-- migrate:up
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(2000) NOT NULL,
    phone_number VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY(id),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

-- migrate:down
DROP table users;
