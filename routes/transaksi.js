const transaksiRoute = require('express').Router();
const { TransaksiController } = require('../controllers');

transaksiRoute.get('/', TransaksiController.getAllTra);
transaksiRoute.post('/add', TransaksiController.addTra);
transaksiRoute.delete('/remove/:idTra', TransaksiController.removeTra);
transaksiRoute.put('/edit/:idTra', TransaksiController.editTra);

module.exports = transaksiRoute;
