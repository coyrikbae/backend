const { dttransaksi, item, transaksi } = require('../models');

class DtTransaksiController {

    static async getAllDtTra(req, res) {
        try {
            const dttra = await dttransaksi.findAll({
                include: [item, transaksi]
            })

            res.status(200).json(dttra)
        } catch (err) {
            res.Status(500).json(err)
        }
    }
    static async addDtTra(req, res) {
        try {
            const { idTra, idItm, jumlahItm, total_bayar } = req.body;
            const hasil = await dttransaksi.create({
                idTra,
                idItm,
                jumlahItm,
                total_bayar,
            })

            hasil ?
                res.status(200).json({ message: 'Detail added successfully.' }) :
                res.status(400).json({ message: 'Deatil creation failed.' })
        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async removeDtTra(req, res) {
        try {
            const id = Number(req.params.idDttra)
            const hasil = await dttransaksi.destroy({
                where: { id }
            })

            hasil ?
                res.status(200).json({ message: 'remove data successfully.' }) :
                res.status(400).json({ message: 'remove data failed.' })
        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async editDtTra(req, res) {
        try {
            const id = Number(req.params.idDttra)
            const { idTra, idItm, jumlahItm, total_bayar } = req.body;
            let hasil = await dttransaksi.update({
                idTra,
                idItm,
                jumlahItm,
                total_bayar,
            },
                {
                    where: { id }
                })

            hasil ?
                res.status(200).json({ message: 'detail updated successfully.' }) :
                res.status(400).json({ message: 'detail update failed.' })
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = DtTransaksiController;
