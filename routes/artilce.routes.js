module.exports = app => {
    const articles = require("../controllers/articles.controller");

    let router = require("express").Router();

    router.post("/", articles.create);

    router.get("/", articles.findAll);

    router.get("/published", articles.findAllPublished);

    router.get("/:id", articles.findOne);

    router.put("/:id", articles.update);

    router.delete("/:id", articles.delete);

    router.delete("/", articles.deleteAll);

    app.use("/api/article", router);
};