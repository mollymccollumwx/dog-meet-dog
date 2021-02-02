module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User",{
        ownerFirstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ownerLastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dogName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dogSize: {
            type: DataTypes.STRING,
            allowNull: false
        },
        friendliness: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dogAge: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dogBreed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageLink: {
            type: DataTypes.STRING,
            defaultValue: "http://res.cloudinary.com/deckz8crp/image/upload/v1612142957/hfutnx74mbuoxqndfrwp.png"
        }, 
        dogVaccinated: DataTypes.BOOLEAN,
        treatPoints: {
            type: DataTypes.INTEGER,
            defaultValue: 10
        }
    });
    User.associate = function(models) {
       User.belongsToMany(models.User, {through: models.Connection, as: 'userOnes', foreignKey: 'userOneId'});
       User.belongsToMany(models.User, {through: models.Connection, as: 'userTwos', foreignKey: 'userTwoId'});
    }
    return User;
};