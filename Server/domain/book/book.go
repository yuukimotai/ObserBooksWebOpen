package bookmodel

import "github.com/google/uuid"

type Book struct {
	UserId         uuid.UUID
	JanCode        string `json:"jancode"`
	Title          string `json:"title"`
	Author         string `json:"author"`
	ItemUrl        string `json:"itemurl"`
	LargeImageUrl  string `json:"larageimageurl"`
	MidiumImageUrl string `json:"midiumimageurl"`
	MyBook         bool   `json:"mybook"`
	AttentionBook  bool   `json:"attentionbook"`
}
