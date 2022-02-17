const express = require("express");

const router = express.Router();

const queries = require('../db/queries');

function isValidId(req, res, next) {
    if (!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}

function validArticle(article) {
    const hasHeading = typeof article.heading == 'string' && article.heading.trim() !== '';
    const hasContent = typeof article.content == 'string' && article.content.trim() !== '';
    return hasHeading && hasContent;
}


router.get('/', (req, res) => {
    queries.readAll().then(articles => {
        res.json(articles);
    })
})

router.get('/:id', isValidId, (req, res, next) => {
    queries.getOne(req.params.id).then(article => {
        if (article) {
            res.json(article);
        } else {
            next();
        }
    })
})

router.post('/', (req, res, next) => {
    if (validArticle(req.body)) {
        queries.create(req.body).then(article => {
            res.json(article);
        });
    } else {
        next(new Error('Invalid article'));
    }
});

router.put('/:id', isValidId, (req, res, next) => {
    if (validArticle(req.body)) {
        queries.update(req.params.id, req.body).then(article => {
            res.json(article);
        })
    } else {
        next(new Error('Invalid article'));
    }
});

router.delete('/:id', isValidId, (req, res, next) => {
    queries.delete(req.params.id).then(() => {
        res.json({
            deleted: true
        });
    });
});

module.exports = router;