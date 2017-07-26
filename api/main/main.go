package main

import (
	_ "github.com/dgrijalva/jwt-go"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"

	"github.com/tungnt244/scoville_website/api/main/authentication"
	"github.com/tungnt244/scoville_website/api/main/config"
	"github.com/tungnt244/scoville_website/api/main/db"
	"github.com/tungnt244/scoville_website/api/main/handler"
)

func main() {
	//Create echo instance
	e := echo.New()
	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	//CORS
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.GET, echo.HEAD, echo.PUT, echo.PATCH, echo.POST, echo.DELETE},
	}))

	//Get connection to the database
	dsn := "host=" + config.HOST + " user=" + config.USER + " dbname=" + config.DBNAME + " sslmode=" + config.SSLMODE + " password=" + config.PASSWORD
	gormDB, err := gorm.Open(config.DBMS, dsn)
	if err != nil {
		panic(err) // Just for example purpose. You should use proper error handling instead of panic
	}
	defer gormDB.Close()

	db.SetupConnection(gormDB)

	e.GET("/users/:id", handler.GetUser)
	// fmt.Sprintf(db.Manager.databse)
	// e.GET("/product/post", handler.CreateProduct)
	// e.DELETE("/product/delete", handler.DeleteProduct)
	// e.GET("/", handler.Hello)
	// e.GET("/product/create", handler.CreateProduct)
	// e.PUT("/product/update/:id", handler.UpdateProduct)
	// e.GET("/products", handler.GetAllProduct)
	// e.DELETE("/product/delete/:id", handler.DeleteProduct)

	// e.POST("/user/create", handler.CreateNewUser)
	e.POST("/login", authentication.Login)

	// Unauthenticated route
	a := e.Group("/")
	a.Use(middleware.JWT([]byte("secret")))
	a.GET("/", authentication.Accessible)

	// Restricted group
	r := e.Group("/restricted")
	r.Use(middleware.JWT([]byte("secret")))
	r.GET("", authentication.Restricted)

	e.Logger.Fatal(e.Start(":4444"))
}
