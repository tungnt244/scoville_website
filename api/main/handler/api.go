package handler

import (
	"github.com/labstack/echo"
	"github.com/tungnt244/scoville_website/api/main/db"
	"github.com/tungnt244/scoville_website/api/main/helper"
	"github.com/tungnt244/scoville_website/api/main/model"
	"golang.org/x/crypto/bcrypt"
	// "fmt"
	// "gopkg.in/go-playground/validator.v9"
	"github.com/bluele/slack"
	_ "gopkg.in/gomail.v2"
	"net/http"
)

const (
	token       = "xoxp-134104585698-215180420103-220014213207-962f0f16d5e49cb173fc8b25a338e363"
	channelName = "api_call_slack"
)

/*
	Function to controllr User api
	_Get all users
	_Get user with id
	_Check valid and invalid user
	_Create new user with enrypted password
	_Update user information
	_Delete user with the given id
*/
func GetAllUsers(c echo.Context) error {
	var users []model.User
	var err error
	users, err = db.Manager.GetAllUsers()
	if err != nil {
		return c.JSON(http.StatusNotFound, err.Error())
	}
	return c.JSON(http.StatusOK, users)
}

func GetUser(c echo.Context) error {
	userId := c.Param("id")
	user, err := db.Manager.GetUserById(userId)
	if err != nil {
		return c.JSON(http.StatusNotFound, err.Error())
	}
	return c.JSON(http.StatusOK, user)

}

func CreateUser(c echo.Context) error {
	u := new(model.User)
	if err := c.Bind(u); err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}
	if err := c.Validate(u); err != nil {
		return c.JSON(http.StatusBadRequest, "Missing data")

	}
	//Encrypted password before saving in database
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(u.Password), bcrypt.DefaultCost)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	if helper.ValidateEmail(u.Email) == false {
		return c.JSON(http.StatusBadRequest, "Not a valid Email")
	}

	// existedEmail = db.Manager.CheckExistedEmail(u.Email)

	// if existedEmail.Email == u.Email {
	// 	return c.JSON(http.StatusOK, "Email already existed")
	// }
	err = db.Manager.SaveUser(u.Email, string(hashedPassword))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, "Successful Created")

}

func UpdateUser(c echo.Context) error {
	userId := c.Param("id")
	u := new(model.User)
	if err := c.Bind(u); err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(u.Password), bcrypt.DefaultCost)

	if err != nil {
		return c.JSON(http.StatusInternalServerError, "Password cannot be encrypted")
	}

	_, err = db.Manager.UpdateUserInfo(userId, string(hashedPassword))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, "Successful Updated")

}

func Login(c echo.Context) error {
	u := new(model.User)

	if err := c.Bind(u); err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}
	if err := c.Validate(u); err != nil {
		return c.JSON(http.StatusBadRequest, "Missing data")

	}
	userCheckPassword, err := db.Manager.GetUserByEmail(u.Email)
	if err != nil {
		return c.String(http.StatusNotFound, "The user didn't exist")
	}

	err = bcrypt.CompareHashAndPassword([]byte(userCheckPassword.Password), []byte(u.Password))
	if err != nil {
		return c.String(http.StatusNotFound, "The Password is not correct")
	}

	user, err := db.Manager.GetUserByEmailAndPass(u.Email, userCheckPassword.Password)
	if err != nil {
		return c.String(http.StatusBadRequest, "Email or Password is not correct")
	}
	return c.JSON(http.StatusOK, user.Email)
}

func DeleteUser(c echo.Context) error {
	userId := c.Param("id")

	user, err := db.Manager.GetUserById(userId)
	if err != nil {
		return c.JSON(http.StatusNotFound, err.Error())
	}

	err = db.Manager.DeleteUser(user)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, "Successful deleted")

}

/*
	Function to controllr News api
	_Get a news with the given id
	_Get all news in database
	_Create a news
	_Update information of news
	_Delete news with the given id
*/
func CreateNews(c echo.Context) error {
	n := new(model.News)
	if err := c.Bind(n); err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}
	err := db.Manager.SaveNews(n)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, "Successful Created")

}

func GetNews(c echo.Context) error {
	newsId := c.Param("id")
	news, err := db.Manager.GetNewsById(newsId)
	if err != nil {
		return c.JSON(http.StatusNotFound, "Not existed")

	}
	return c.JSON(http.StatusOK, news)

}

func GetAllNews(c echo.Context) error {
	checkUrl := c.Path()
	var news []model.News
	var err error
	if checkUrl == "/news" {
		news, err = db.Manager.GetAllNews()
	} else {
		news, err = db.Manager.GetAllBriefInfo()
	}
	if err != nil {
		return c.JSON(http.StatusNotFound, "Not existed")
	}
	return c.JSON(http.StatusOK, news)

}

func UpdateNews(c echo.Context) error {
	newsId := c.Param("id")
	n := new(model.News)
	if err := c.Bind(n); err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}

	_, err := db.Manager.UpdateNewsInfo(newsId, n)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, "Successful updated")
}

func DeleteNews(c echo.Context) error {
	newsId := c.Param("id")

	news, err := db.Manager.GetNewsById(newsId)
	if err != nil {
		return c.JSON(http.StatusNotFound, err.Error())

	}

	err = db.Manager.DeleteNews(news)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, "Successful deleted")

}

/*
	Function to controllr formRecruitment api
	_Get all formRecruitment
	_Get all general form
	_Get all engineer form
	_Create a formRecruitment
	_Update status of formRecruitment
	_Delete formRecruitment with the given id
*/
func GetAllFormRecruitment(c echo.Context) error {
	var formRecruitments []model.Form_recruitment
	var err error
	formRecruitments, err = db.Manager.GetAllForms()
	if err != nil {
		return c.JSON(http.StatusNotFound, err.Error())
	}
	return c.JSON(http.StatusOK, formRecruitments)
}

func GetGeneralForm(c echo.Context) error {
	var formRecruitments []model.Form_recruitment
	var err error
	formRecruitments, err = db.Manager.GetGeneralForm()
	if err != nil {
		return c.JSON(http.StatusNotFound, err.Error())
	}
	return c.JSON(http.StatusOK, formRecruitments)
}

func GetEngineerForm(c echo.Context) error {
	var formRecruitments []model.Form_recruitment
	var err error
	formRecruitments, err = db.Manager.GetEngineerForm()
	if err != nil {
		return c.JSON(http.StatusNotFound, err.Error())
	}
	return c.JSON(http.StatusOK, formRecruitments)
}

func UpdateFormRecruitment(c echo.Context) error {
	formId := c.Param("id")
	f := new(model.Form_recruitment)
	if err := c.Bind(f); err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}

	_, err := db.Manager.UpdateFormStatus(formId, f.Status)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, "Successful updated")
}

func CreateFormRecruitment(c echo.Context) error {

	api := slack.New(token)

	err := api.ChatPostMessage(channelName, "You received a new form!", nil)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}

	// m := gomail.NewMessage()
	// m.SetHeader("From", "tommythien95@gmail.com")
	// m.SetHeader("To", "tommythien95@gmail.com")
	// m.SetHeader("Subject", "I am testing")
	// m.SetBody("text/html", "Hello <b>Thien</b> and <i>This is me</i>!")

	// d := gomail.NewDialer("smtp.gmail.com", 465, "", "")

	// // Send the email to Bob, Cora and Dan.
	// if err := d.DialAndSend(m); err != nil {
	// 	panic(err)
	// }

	f := new(model.Form_recruitment)
	if err := c.Bind(f); err != nil {
		return c.JSON(http.StatusBadRequest, err)
	}
	if f.LinkGithub != "" {
		f.Position = "Engineer"
	}
	err = db.Manager.SaveFormRecruitment(f)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err.Error())
	}
	return c.JSON(http.StatusOK, "Successful Created")
}
