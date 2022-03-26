

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

    Movie.associate = function(models) {
        Movie.belongsTo(models.Genre, {
            as: "genre",
       
            foreignKey: "idgenres",
         
          
        });
        Movie.associate = function(models) {
            Movie.belongToMany(models.Character, {
                as: "character",
                through: "character_movie",
                foreignKey: "movie_id",
                otherKey: "character_id",
                timestamps: false
            })
        }
    }

    return Movie
}