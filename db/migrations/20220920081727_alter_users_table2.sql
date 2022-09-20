-- migrate:up
ALTER TABLE users MODIFY COLUMN phonenumber varchar(200) NULL;

-- migrate:down

