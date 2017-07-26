package handler

import (
	"github.com/labstack/echo"
	"github.com/tungnt244/scoville_website/api/main/db"
	// "fmt"
	"net/http"
)

func Hello(c echo.Context) error {
	return c.String(http.StatusOK, "This is my test golang")
}

// func CreateNewUser(c echo.Context) error {
// 	return db.CreateUser(c)
// }

// func CreateProduct(c echo.Context) error {
// 	product := model.Product{Code: "skajdasd", Price: 1230}
// 	if Manager.db.NewRecord(product) == true {
// 		Manager.db.Create(&product)
// 		result := "Successful"
// 		return c.String(http.StatusOK, result)

// 	}
// 	return c.String(http.StatusOK, "aaa")

// }

// func UpdateProduct(c echo.Context) error {
// 	var product model.Product
// 	id := c.Param("id")
// 	Manager.db.First(&product, id) // db.Save(&product)
// 	Manager.db.Model(&product).Update(model.Product{Code: "test", Price: 22229})
// 	return c.JSON(http.StatusOK, id)

// }

// func DeleteProduct(c echo.Context) error {
// 	var product model.Product
// 	id := c.Param("id")
// 	Manager.db.First(&product, id) // db.Save(&product)
// 	Manager.db.Unscoped().Delete(&product)
// 	return c.JSON(http.StatusOK, "Deleted")
// }

// // func findProductNeedToBeUpdated() {
// // 	db := getConnection()
// // 	defer db.Close()
// // 	var product model.Product
// // }
// // Handler
// func Test(c echo.Context) error {
// 	name := c.FormValue("name")
// 	return c.String(http.StatusOK, name)
// }

// func Test1(c echo.Context) (err error) {
// 	u := new(model.User)
// 	if err = c.Bind(u); err != nil {
// 		return
// 	}
// 	return c.JSON(http.StatusOK, u)
// }

func GetUser(c echo.Context) error {
	userId := c.Param("id")
	user, err := db.Manager.GetUserById(userId)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, user)

}

// func GetAllProduct(c echo.Context) error {

// 	product, err := db.Manager.GetAllProducts()

// 	if err != nil {
// 		return c.JSON(http.StatusInternalServerError, err.Error())
// 	}
// 	return c.JSON(http.StatusOK, product)
// }

// func CreateProduct(c echo.Context) error {
// 	temp := model.Product{Code: "skajdasd", Price: 1230}
// 	product, err := db.Manager.Create(temp)

// 	if err != nil {
// 		return c.JSON(http.StatusInternalServerError, err.Error())
// 	}
// 	return c.JSON(http.StatusOK, product)
// }
