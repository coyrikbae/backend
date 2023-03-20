const { Router } = require('express');
const route = Router();
const mainEndPoint = '/api';

route.get(mainEndPoint, (req, res) => {
    res.status(200).json({
        message: 'API successful.'
    })
})

const adminRoutes = require('./admin');
route.use(`${mainEndPoint}/admins`, adminRoutes);

const customerRoutes = require('./customer');
route.use(`${mainEndPoint}/customers`, customerRoutes);

const itemRoutes = require('./item');
route.use(`${mainEndPoint}/items`, itemRoutes);

const transaksiRoutes = require('./transaksi');
route.use(`${mainEndPoint}/transaksis`, transaksiRoutes);

const dttransaksiRoutes = require('./dttransaksi');
route.use(`${mainEndPoint}/dttransaksis`, dttransaksiRoutes);

module.exports = route
