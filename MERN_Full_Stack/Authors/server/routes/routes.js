const AuthorController = require("../controllers/author.controller");
module.exports = function(app){
    app.get("/api/authors", AuthorController.findAllAuthors);
    app.post("/api/authors", AuthorController.createAuthor);
    app.get("/api/authors/:id", AuthorController.getAuthor);
    app.patch("/api/authors/:id", AuthorController.updateAuthor);
    app.delete("/api/authors/:id", AuthorController.deleteAuthor);
    app.put("/api/authors/:id", AuthorController.updateAuthor);
}