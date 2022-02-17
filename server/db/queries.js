const knex = require('./knex');

module.exports = {
    readAll() {
        return knex('article');
    },
    getOne(id) {
        return knex('article').where('id', id).first();
    },
    create(article) {
        return knex('article').insert(article, '*');
    },
    update(id, article) {
        return knex('article').where('id', id).update(article, '*');
    },
    delete(id) {
        return knex('article').where('id', id).del();
    }
}