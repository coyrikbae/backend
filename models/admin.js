'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // admin.hasMany(models.transaksi)
      admin.hasMany(models.transaksi, {
        foreignKey: 'idAdm'
      })

    }
  }
  admin.init({
    nameAdm: DataTypes.STRING,
    emailAdm: DataTypes.STRING,
    passwordAdm: DataTypes.STRING,
    imageAdm: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'admin',
  });
  return admin;
};