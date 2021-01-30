module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User",{
        ownerFirstName: DataTypes.STRING,
        ownerLastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        dogName: DataTypes.STRING,
        zipCode: DataTypes.INTEGER,
        dogSize: DataTypes.STRING,
        friendliness: DataTypes.STRING,
        dogAge: DataTypes.STRING,
        dogBreed: DataTypes.STRING,
        imageLink: DataTypes.STRING,
        dogVaccinated: DataTypes.BOOLEAN,
        treatPoints: DataTypes.INTEGER
    });
    User.associate = function(models) {
       User.belongsToMany(models.User, {through: models.Connection, as: 'userOnes', foreignKey: 'userOneId'});
       User.belongsToMany(models.User, {through: models.Connection, as: 'userTwos', foreignKey: 'userTwoId'});
    }
    return User;

};