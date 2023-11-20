package domain

import (
	usermodel "obserbooks/domain/user"
)

type AuthenticationRepository interface {
	Login(*usermodel.User) error
	Logout(*usermodel.User) (*usermodel.User, error)
	//FindAll() (entities.Users, error)
	//Update(*entities.User) error
	//Delete(ids.UserId) error
}
