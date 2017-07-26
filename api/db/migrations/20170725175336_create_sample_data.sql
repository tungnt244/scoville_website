-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied

INSERT INTO users (name, email,password) VALUES
    ('Thien', 'thien@gmail.com', 'pass123'),
    ('Tung', 'tung@yahoo.com', 'admin');
-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back

