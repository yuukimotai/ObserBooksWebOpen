package graphql

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.39

import (
	"context"
	"fmt"
	"obserbooks/graph/model"
)

// CreateReadingMemo is the resolver for the createReadingMemo field.
func (r *mutationResolver) CreateReadingMemo(ctx context.Context, input model.NewReadingMemo) (*model.ReadingMemo, error) {
	panic(fmt.Errorf("not implemented: CreateReadingMemo - createReadingMemo"))
}

// UpdateReadingMemo is the resolver for the updateReadingMemo field.
func (r *mutationResolver) UpdateReadingMemo(ctx context.Context, input model.UpdateReadingMemo) (*model.ReadingMemo, error) {
	panic(fmt.Errorf("not implemented: UpdateReadingMemo - updateReadingMemo"))
}

// DeleteReadingMemo is the resolver for the deleteReadingMemo field.
func (r *mutationResolver) DeleteReadingMemo(ctx context.Context, input model.DeleteReadingMemo) (int, error) {
	panic(fmt.Errorf("not implemented: DeleteReadingMemo - deleteReadingMemo"))
}

// Readingmemos is the resolver for the readingmemos field.
func (r *queryResolver) Readingmemos(ctx context.Context) ([]*model.ReadingMemo, error) {
	panic(fmt.Errorf("not implemented: Readingmemos - readingmemos"))
}