import {apiresponse} from '../helpers/apiResponse';
import {validationResult} from 'express-validator';
import Article from "../model/article";
import * as mongoose from "mongoose";

//create
export const createArticle = async (req, res) => {
    const body = req.body
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return apiresponse(400, res, "not found");
        }
        const newArticle = new Article(body)
        await newArticle.save((err, article) => {
            if (err) {
                return apiresponse(400, res, err)
            } else {
                return apiresponse(200, res, 'Article Created successfully')
            }
        })
    } catch (error) {
        console.log(error)
        return apiresponse(400, res, error);
    }
}

//read all
export const readArticleList = async (req, res) => {
    try {
        await Article.find((err, article) => {
            if (err) {
                return apiresponse(400, res, err)
            } else {
                return apiresponse(201, 'All Articles', article)
            }
        })
    } catch (error) {
        return apiresponse(400, res, error)
    }
};

//read one article
export const readOneArticle = async (req, res) => {
    const id = req.params.articleId;
    let isValid = mongoose.Types.ObjectId.isValid(id)

    if (!isValid) {
        return apiresponse(401, res, 'Article id is not valid')
    }
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return apiresponse(401, res, 'validation Error', errors.array())
        }
        await Article.findById(id, (err, article) => {
            if (err) {
                return apiresponse(401, res, err)
            } else {
                return apiresponse(201, res, 'Single Article', article)
            }
        })
    } catch (error) {
        return apiresponse(401, res, error);
    }
}
//update article
export const updateArticle = async (req, res) => {
    const id = req.params.articleId;
    let isValid = mongoose.Types.ObjectId.isValid(id)
    if (!isValid) {
        return apiresponse(401, res, 'Article id is not valid')
    }
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return apiresponse(401, res, 'validation Error', errors.array().message)
        } else {
            await Article.findById(id, (err, article) => {
                if (!article) {
                    return apiresponse(401, res, "Article not exists with this id");
                } else {
                    Article.findByIdAndUpdate(id, req.body, (err, result) => {
                        if (err) {
                            return apiresponse(401, res, err)
                        } else {
                            return apiresponse(201, res, 'Article update successfully')
                        }
                    })
                }
            })
        }
    } catch (error) {
        return apiresponse(401, res, error);
    }
}
//delete article
export const deleteArticle = async (req, res) => {
    const id = req.params.articleId
    let isValid = mongoose.Types.ObjectId.isValid(id)
    if (!isValid) {
        return apiresponse(401, res, 'Article id is not valid')
    }
    try {
        await Article.findById(id, (err, article) => {
            if (!article) {
                return apiresponse(401, res, "Article not exists with this id");
            } else {
                Article.deleteOne({"_id": id}, (err, result) => {
                    if (err) {
                        return apiresponse(401, res, err)
                    } else {
                        return apiresponse(201, res, 'Article deleted successfully')
                    }
                })
            }
        })
    } catch (error) {
        return apiresponse(401, res, error);
    }
}