package main

import (
	"os"

	// "golang.org/x/oauth2/jwt"

	database "obserbooks/infrastructure/mysql"
	"obserbooks/infrastructure/routers"

	"github.com/gin-gonic/gin"
	//"obserbooks/infrastructure/routers"
)

const defaultPort = "8080"

func main() {
	db, err := database.NewDB()

	if err != nil {
		panic(err)
	}

	// 最後にデータベースとの接続を切断します．
	defer func(db *database.DB) {
		err := db.Close()
		if err != nil {
			//log.Log().Error(err.Error())
		}
	}(db)

	// r := gin.Default()

	// r.POST("/query", graphqlHandler())
	// r.GET("/", playgroundHandler())
	// r.Run()
	router := routers.NewRouter(gin.Default(), db)

	err = router.Run()

	if err != nil {
		//log.Log().Error(err.Error())
	}
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}
	// srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: &graph.Resolver{}}))
	// http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	// http.Handle("/query", srv)
	// log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	// log.Fatal(http.ListenAndServe(":"+port, nil))

	//router.Run(":8080")
}
