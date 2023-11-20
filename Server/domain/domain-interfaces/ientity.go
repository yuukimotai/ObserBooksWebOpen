package domain

type Entity interface {
	Equal(target Entity) bool
}