package db

import (
	"github.com/tungnt244/scoville_website/api/main/model"
)

func (m *DBManager) GetAllForms() (n []model.Form_recruitment, err error) {
	err = m.database.Find(&n).Error
	return
}

func (m *DBManager) GetGeneralForm() (n []model.Form_recruitment, err error) {
	err = m.database.Where(&model.Form_recruitment{Position: "General Staff"}).Find(&n).Error
	return
}

func (m *DBManager) GetEngineerForm() (n []model.Form_recruitment, err error) {
	err = m.database.Where(&model.Form_recruitment{Position: "Engineer"}).Find(&n).Error
	return
}

func (m *DBManager) UpdateFormStatus(id string, status string) (form model.Form_recruitment, err error) {
	err = m.database.Find(&form, id).Update(&model.Form_recruitment{Status: status}).Error
	return
}

func (m *DBManager) SaveFormRecruitment(n *model.Form_recruitment) (err error) {
	err = m.database.Create(&model.Form_recruitment{Email: n.Email, SelfPR: n.SelfPR, LinkGithub: n.LinkGithub,
		Position: n.Position, Status: n.Status}).Error
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
