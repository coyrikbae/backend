'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // item.hasMany(models.dttransaksi)
      item.hasMany(models.dttransaksi, {
        foreignKey: 'idItm'
      })
    }
  }
  item.init({
    nameItm: DataTypes.STRING,
    stockItm: DataTypes.INTEGER,
    priceItm: DataTypes.INTEGER,
    imageItm: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'item',
  });
  return item;
};