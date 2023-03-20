const { item } = require('../models');

class ItemController {

    static async getAllItem(req, res) {
        try {
            let itm = await item.findAll();

            res.status(200).json(itm)
        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async addItem(req, res) {
        try {
            const { nameItm, stockItm, priceItm } = req.body;
            let hasil = await item.create({
                nameItm,
                stockItm,
                priceItm,
                imageItm: 'http://via.placeholder.com/150',
            })

            hasil ?
                res.status(200).json({ message: 'Item created successfully.' }) :
                res.status(400).json({ message: 'Item creation failed.' })
        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async removeItem(req, res) {
        try {
            const id = Number(req.params.idItm)
            let hasil = await item.destroy({
                where: { id }
            })

            hasil ?
                res.status(200).json({ message: 'Item deleted successfully.' }) :
                res.status(400).json({ message: 'Item delete failed.' })
        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async editItem(req, res) {
        try {
            const id = Number(req.params.idItm)
            const { nameItm, stockItm, priceItm } = req.body;
            let hasil = await item.update({
                nameItm,
                stockItm,
                priceItm,
                imageItm: 'http://via.placeholder.com/150',
            },
                {
                    where: { id }
                })

            hasil ?
                res.status(200).json({ message: 'Item updated successfully.' }) :
                res.status(400).json({ message: 'Item update failed.' })
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = ItemController;
