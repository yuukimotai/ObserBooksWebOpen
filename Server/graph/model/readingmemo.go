package model

type ReadingMemo struct {
	UserId  string
	JanCode string
	Title   string
	Author  string
	Content string
}

type NewReadingMemo struct {
	UserId  string
	JanCode string
	Title   string
	Author  string
	Content string
}

type UpdateReadingMemo struct {
	UserId  string
	JanCode string
	Title   string
	Author  string
	Content string
}

type DeleteReadingMemo struct {
	UserId  string
	JanCode string
}
