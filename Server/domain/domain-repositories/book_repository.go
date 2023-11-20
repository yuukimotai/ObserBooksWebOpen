package repositories

import (
	"context"
	"obserbooks/graph/model"
	"obserbooks/infrastructure/dto"
)

type BookRepository interface {
	CreateBook(context.Context, model.NewBook) (*dto.BookDTO, error)
}
