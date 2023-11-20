package repositories

import (
	usermodel "obserbooks/domain/user"
	"obserbooks/graph/model"
	"obserbooks/usecases/responses"

	"github.com/gin-gonic/gin"
)

type AuthenticationRepository interface {
	Create(*usermodel.User, *gin.Context) *responses.RegisterResponse
	Login(usermodel.User) *usermodel.User
	FindUser(*usermodel.User, *gin.Context) (*model.User, error)
	//Logout(*usermodel.User)
	// FindAll() (*usermodel.Users, error)
	// Update(usermodel.User) error
	//Delete(usermodel.User) error
}
