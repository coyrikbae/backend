const { customer } = require('../models');

class CustomerController {

    static async getAllCustomer(req, res) {
        try {
            let cus = await customer.findAll();

            res.status(200).json(cus)
        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async addCustomer(req, res) {
        try {
            const { nameCus, alamatCus, tlpCus } = req.body;
            let hasil = await customer.create({
                nameCus,
                alamatCus,
                tlpCus,
            })

            hasil ?
                res.status(200).json({ message: 'Customer created successfully.' }) :
                res.status(400).json({ message: 'Customer ctreation failed.' })
        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async removeCustomer(req, res) {
        try {
            const id = Number(req.params.idCus)
            let hasil = await customer.destroy({
                where: { id }
            })

            hasil ?
                res.status(200).json({ message: 'Customer deleted successfully.' }) :
                res.status(400).json({ message: 'Customer delete failed.' })
        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async editCustomer(req, res) {
        try {
            const id = Number(req.params.idCus)
            const { nameCus, alamatCus, tlpCus } = req.body;
            let hasil = await customer.update({
                nameCus,
                alamatCus,
                tlpCus,
            },
                {
                    where: { id }
                })

            hasil ?
                res.status(200).json({ message: 'Customer has been updated.' }) :
                res.status(400).json({ message: 'Customer update failed.' })
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = CustomerController;