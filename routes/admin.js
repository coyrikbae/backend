const adminRoute = require('express').Router();
const { AdminController } = require('../controllers');

adminRoute.get('/', AdminController.getAllAdmin);
adminRoute.post('/register', AdminController.register);
adminRoute.post('/login', AdminController.login);
adminRoute.delete('/remove/:idAdm', AdminController.removeAdmin);
adminRoute.put('/edit/:idAdm', AdminController.editAdmin);

module.exports = adminRoute
