import express from 'express'

const router = express.Router()
import {body} from 'express-validator'
import {
    createArticle,
    deleteArticle,
    readArticleList,
    readOneArticle,
    updateArticle
} from '../controller/ArticleController';

router.post('/article', createArticle);
router.get('/article/:articleId', readOneArticle);
router.get('/article/all', readArticleList);
router.put('/article/:articleId', updateArticle);
router.delete('/article/:articleId', deleteArticle);

export default router;