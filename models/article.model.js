module.exports = (sequelize, Sequelize) => {
    return sequelize.define("article", {
        id: {
            type: Sequelize.STRING
        },
        heading: {
            type: Sequelize.STRING
        },
        content: {
            type: Sequelize.BOOLEAN
        },
        created_at: {
            type: Sequelize.BOOLEAN
        },
        updated_at: {
            type: Sequelize.BOOLEAN
        }
    });
};