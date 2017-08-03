package model

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"time"
)

type User struct {
	gorm.Model
	Email    string `gorm:"type:varchar(100);unique_index" json:"email" validate:"required"`
	Password string `json:"password" validate:"required"`
	Role     string `json:"string"`
}

type News struct {
	// gorm.Model
	ID          uint   `gorm:"primary_key" json:"id"`
	Title       string `gorm:"size:255" json:"title" validate:"required"`
	Content     string `json:"content"`
	Picture     string `json:"picture"`
	Description string `grom:"size:255" json:"description"`
}

type Form_recruitment struct {
	ID            uint      `gorm:"primary_key" json:"id`
	FirstName     string    `gorm:"size:255" json:"first_name"`
	LastName      string    `gorm:"size:255" json:"last_name"`
	Email         string    `gorm:"type:varchar(100)" json:"email"`
	Telephone     string    `gorm:"size:255" json:"telephone"`
	Position      string    `gorm:"size:255" json:"field"`
	Advertisement string    `gorm:"size:255" json:"advertisement"`
	Status        string    `gorm:"string:20" json:"status"`
	CreatedAt     time.Time `gorm:"column:created_at;type:datetime;default:CURRENT_TIMESTAMP"`
}
