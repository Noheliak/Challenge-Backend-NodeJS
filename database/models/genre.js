module.exports = (sequelize, dataTypes) => {
    let alias = 'Genre';
    let cols = {
        idgenres: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        },

        moviesAssociate: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'genres',
        timestamps: false
    };
    const Genre = sequelize.define(alias, cols, config)

    return Genre
}