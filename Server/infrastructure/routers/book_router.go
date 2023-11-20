package routers

import (
	database "obserbooks/infrastructure/mysql"
	repositories "obserbooks/infrastructure/repositories/book"
	controller "obserbooks/interfaces/controllers"
	graphql "obserbooks/usecases/interactors/graph"

	"os"

	"github.com/gin-gonic/gin"
)

func BookRouter(router *gin.Engine, db *database.DB) {
	c := controller.NewBookController(*graphql.NewBookInteractor(*repositories.NewBookRepository(db)))

	//c := controller.NewBookController()
	router.POST("/query", c.GraphqlHandler(db))
	router.GET("/", c.PlaygroundHandler())
	defaultPort := "8080"

	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	//log.Printf("connect to http://localhost:%s for GraphQL playground", port)
	//log.Fatal(http.ListenAndServe(":"+port, nil))
	// bookRouter := router.Group("/books")
	// {
	// 	bookRouter.POST("/query", graphqlHandler())
	// 	bookRouter.GET("/", playgroundHandler())
	// 	bookRouter.GET("/test", c.TestBook)
	// }
}
