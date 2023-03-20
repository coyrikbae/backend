'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // transaksi.belongsTo(models.admin)
      // transaksi.belongsTo(models.customer)
      // transaksi.hasMany(models.dttransaksi)
      transaksi.belongsTo(models.admin, {
        foreignKey: 'idAdm'
      })
      transaksi.belongsTo(models.customer, {
        foreignKey: 'idCus'
      })
      transaksi.hasMany(models.dttransaksi, {
        foreignKey: 'idTra'
      })

    }
  }
  transaksi.init({
    idAdm: DataTypes.INTEGER,
    idCus: DataTypes.INTEGER,
    tgl_transaksi: DataTypes.STRING,
    total_transaksi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transaksi',
  });
  return transaksi;
};