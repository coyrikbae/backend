'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // customer.hasMany(models.transaksi)
      customer.hasMany(models.transaksi, {
        foreignKey: 'idCus'
      })
    }

  }
  customer.init({
    nameCus: DataTypes.STRING,
    alamatCus: DataTypes.STRING,
    tlpCus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'customer',
  });
  return customer;
};