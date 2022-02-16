const Article = () => {
    exports.up = function (knex) {
        return knex.schema.createTable('article', (table) => {
            table.increments().primary(); // This is our id field
            table.string('heading');
            table.text('content', 'longtext');
            table.timestamp('created_at', {useTz: true});
            table.timestamp('updated_at', {useTz: true});
        });
    };
    exports.down = function (knex) {
        return knex.schema.dropTable('article')
    };
}
export default Article;