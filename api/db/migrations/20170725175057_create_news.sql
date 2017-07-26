-- +goose Up
-- SQL in this section is executed when the migration is applied.
CREATE TABLE news (
    id SERIAL NOT NULL ,
    tilte text NOT NULL,
    content text NOT NULL,
    picture  varchar(255) NOT NULL,
    dateCreated timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  	dateUpdated timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)

);
-- +goose Down
-- SQL in this section is executed when the migration is rolled back.
DROP TABLE news;