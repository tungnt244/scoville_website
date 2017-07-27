-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied

INSERT INTO users (email,password) VALUES
    ('admin@gmail.com', 'admin');
-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back

