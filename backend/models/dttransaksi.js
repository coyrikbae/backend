'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dttransaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // dttransaksi.belongsToMany(models.transaksi)
      // dttransaksi.belongsToMany(models.item)
      dttransaksi.belongsTo(models.transaksi, {
        foreignKey: 'idTra'
      })
      dttransaksi.belongsTo(models.item, {
        foreignKey: 'idItm'
      })
    }
  }
  dttransaksi.init({
    idTra: DataTypes.INTEGER,
    idItm: DataTypes.INTEGER,
    jumlahItm: DataTypes.INTEGER,
    total_bayar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dttransaksi',
  });
  return dttransaksi;
};