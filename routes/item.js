const itemRoute = require('express').Router();
const { ItemController } = require('../controllers');

itemRoute.get('/', ItemController.getAllItem);
itemRoute.post('/add', ItemController.addItem);
itemRoute.delete('/remove/:idItm', ItemController.removeItem);
itemRoute.put('/edit/:idItm', ItemController.editItem);

module.exports = itemRoute
