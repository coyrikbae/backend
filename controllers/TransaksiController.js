const { transaksi, admin, customer } = require('../models');

class TransaksiController {

    static async getAllTra(req, res) {
        try {
            let tra = await transaksi.findAll({
                include: [admin, customer]
            })

            res.status(200).json(tra)
        } catch (err) {
            // console.error(err)
            res.status(500).json(err)
        }
    }
    static async addTra(req, res) {
        try {
            const waktu = new Date()
            const waktuIni = waktu.toLocaleString("en")
            const { idAdm, idCus, total_transaksi } = req.body;
            const hasil = await transaksi.create({
                idAdm,
                idCus,
                tgl_transaksi: waktuIni,
                total_transaksi,
            })

            hasil ?
                res.status(200).json({ message: 'Transaksi successfully.' }) :
                res.status(400).json({ message: 'Transaksi failed.' })
        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async removeTra(req, res) {
        try {
            const id = Number(req.params.idTra)
            let hasil = await transaksi.destroy({
                where: { id }
            })

            hasil ?
                res.status(200).json({ message: 'Transaksi deleted successfully.' }) :
                res.status(400).json({ message: 'Transaksi failed to delete.' })
        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async editTra(req, res) {
        try {
            // const waktu = new Date()
            // const waktuIni = waktu.toLocaleString("en")
            const id = Number(req.params.idTra)
            const { idAdm, idCus, total_transaksi } = req.body;
            let hasil = await transaksi.update({
                idAdm,
                idCus,
                // tgl_transaksi: waktuIni,
                total_transaksi,
            },
                {
                    where: { id }
                })

            hasil ?
                res.status(200).json({ message: 'Transaksi update successful.' }) :
                res.status(400).json({ message: 'Transaksi update failed.' })
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = TransaksiController;
