package model

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

type User struct {
	gorm.Model
	Name     string `gorm:"size:255" json:"name"`
	Email    string `gorm:"type:varchar(100);unique_index" json:"email"`
	Password string
}

type News struct {
	gorm.Model
	Title   string `gorm:"size:255" json:"title"`
	Content string `json:"content"`
	Picture string
}

type FormRecruitment struct {
	gorm.Model
	FirstName    string `gorm:"size:255" json:"firstName"`
	LastName     string `gorm:"size:255" json:"lastName"`
	Email        string `gorm:"type:varchar(100)" json:"email"`
	Telephone    string `gorm:"size:255" json:"telephone"`
	Field        string `gorm:"size:255" json:"field"`
	Advertisment string `gorm:"size:255" json:"advertisment"`
}
