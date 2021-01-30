module.exports = function (sequelize, DataTypes) {
  const Connection = sequelize.define("Connection", {});
  return Connection;
};
