/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const articles = require("../article")
exports.seed = async function (knex) {
    await knex('article').insert(articles);
};
