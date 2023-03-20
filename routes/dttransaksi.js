const dttransaksiRoute = require('express').Router();
const { DtTransaksiController } = require('../controllers');

dttransaksiRoute.get('/', DtTransaksiController.getAllDtTra);
dttransaksiRoute.post('/add', DtTransaksiController.addDtTra);
dttransaksiRoute.delete('/remove/:idDttra', DtTransaksiController.removeDtTra);
dttransaksiRoute.put('/edit/:idDttra', DtTransaksiController.editDtTra);

module.exports = dttransaksiRoute;
