const customerRoute = require('express').Router();
const { CustomerController } = require('../controllers');

customerRoute.get('/', CustomerController.getAllCustomer);
customerRoute.post('/add', CustomerController.addCustomer);
customerRoute.delete('/remove/:idCus', CustomerController.removeCustomer);
customerRoute.put('/edit/:idCus', CustomerController.editCustomer);

module.exports = customerRoute;
