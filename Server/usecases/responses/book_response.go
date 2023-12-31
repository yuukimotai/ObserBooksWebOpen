package responses

type NewBook struct {
	Text   string `json:"text"`
	UserID string `json:"userId"`
}

type Book struct {
	ID   string `json:"id"`
	Text string `json:"text"`
	Done bool   `json:"done"`
	User *User  `json:"user"`
}

type User struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}
