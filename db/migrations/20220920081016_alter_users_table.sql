-- migrate:up
ALTER TABLE users RENAME COLUMN phoneNumber TO phonenumber;



-- migrate:down

