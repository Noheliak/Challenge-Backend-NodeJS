module.exports = (sequelize, dataTypes) => {
    let alias = 'Movie';
    let cols = {
        idmovies: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        image: {
            type: dataTypes.STRING
        },
        title: {
            type: dataTypes.STRING
        },
        creationDate: {
            type: dataTypes.DATE
        },
        ranking: {
            type: dataTypes.INTEGER
        },
     characterAssociate: {
         type: dataTypes.STRING
     },
    };
    let config = {
        tableName: 'movies',
        timestamps: false
    };
    const Movie = sequelize.define(alias, cols, config)

    return Movie
}