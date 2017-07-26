package authentication

import (
	"github.com/labstack/echo"
	_ "github.com/tungnt244/scoville_website/api/main/db"
	"github.com/tungnt244/scoville_website/api/main/model"
	"net/http"
	_ "time"

	"github.com/dgrijalva/jwt-go"
)

func Login(c echo.Context) (err error) {

	u := new(model.User)
	if err = c.Bind(u); err != nil {
		return
	}
	return c.JSON(http.StatusOK, u)

	// user, err := db.Manager.GetUserByEmailAndPass(username, password)
	// if err != nil {
	// 	return c.JSON(http.StatusInternalServerError, err.Error())
	// }
	// return c.JSON(http.StatusOK, user)

	// if username == "jon" && password == "shhh!" {
	// 	// Create token
	// 	token := jwt.New(jwt.SigningMethodHS256)

	// 	// Set claims
	// 	claims := token.Claims.(jwt.MapClaims)
	// 	claims["name"] = "Jon Snow"
	// 	claims["admin"] = true
	// 	claims["exp"] = time.Now().Add(time.Hour * 72).Unix()

	// 	// Generate encoded token and send it as response.
	// 	t, err := token.SignedString([]byte("secret"))
	// 	if err != nil {
	// 		return err
	// 	}
	// 	return c.JSON(http.StatusOK, map[string]string{
	// 		"token": t,
	// 	})
	// }

	// return echo.ErrUnauthorized
}

func Accessible(c echo.Context) error {
	return c.String(http.StatusOK, "Accessible")
}

func Restricted(c echo.Context) error {
	user := c.Get("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	name := claims["name"].(string)
	return c.String(http.StatusOK, "Welcome "+name+"!")
}
