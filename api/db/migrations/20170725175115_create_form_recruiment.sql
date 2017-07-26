-- +goose Up
-- SQL in this section is executed when the migration is applied.
CREATE TABLE form_recruitment (
    id SERIAL NOT NULL ,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    email  varchar(255) NOT NULL,
    telephone varchar(255) NOT NULL,
    field varchar(255) NOT NULL,
    advertisment varchar(255) NOT NULL,
    dateCreated timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  	dateUpdated timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  	deleted_at timestamp NULL,
  	
    PRIMARY KEY(id)

);
-- +goose Down
-- SQL in this section is executed when the migration is rolled back.
DROP TABLE form_recruitment;
