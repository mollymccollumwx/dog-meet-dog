module.exports = function (sequelize, DataTypes) {
  const Connection = sequelize.define("Connection", {});
  Connection.associate = function (models) {
    Connection.belongsTo(models.User, {
      as: "userOne",
      onDelete: "CASCADE",
    });
    Connection.belongsTo(models.User, {
      as: "userTwo",
      onDelete: "CASCADE",
    });
  };
  return Connection;
};
