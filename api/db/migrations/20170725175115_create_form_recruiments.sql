-- +goose Up
-- SQL in this section is executed when the migration is applied.
CREATE TABLE form_recruitments (
    id SERIAL NOT NULL ,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    email  varchar(255) NOT NULL,
    telephone varchar(255) NOT NULL,
    position varchar(255) NOT NULL,
    advertisment varchar(255) NOT NULL,
    status varchar(50) NOT NULL DEFAULT 'NOT PROCESSED',
    created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    PRIMARY KEY(id)

);
-- +goose Down
-- SQL in this section is executed when the migration is rolled back.
DROP TABLE form_recruitments;
