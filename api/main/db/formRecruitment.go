package db

import (
	"github.com/tungnt244/scoville_website/api/main/model"
)

func (m *DBManager) SaveFormRecruitment(n *model.Form_recruitment) (err error) {
	err = m.database.Create(&model.Form_recruitment{FirstName: n.FirstName, LastName: n.LastName, Email: n.Email,
		Telephone: n.Telephone, Position: n.Position, Advertisment: n.Advertisment, Status: n.Status}).Error
	return
}

// func (m *DBManager) GetNewsById(id string) (n model.News, err error) {
// 	err = m.database.Find(&n, id).Error
// 	return
// }

// func (m *DBManager) UpdateNewsInfo(id string, n *model.News) (news model.News, err error) {
// 	err = m.database.Find(&news, id).Update(&model.News{Title: n.Title, Content: n.Content, Picture: n.Picture, Description: n.Description}).Error
// 	return
// }

// func (m *DBManager) DeleteNews(news model.News) (err error) {
// 	err = m.database.Delete(&news).Error
// 	return

// }
