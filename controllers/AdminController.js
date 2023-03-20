const { encryptPwd, decryptPwd } = require('../helpers/bcrypt');
const { tokenGenerator } = require('../helpers/jwt');
const { admin } = require('../models');

class AdminController {

    static async getAllAdmin(req, res) {
        try {
            let adm = await admin.findAll();

            res.status(200).json(adm)
        } catch (err) {
            res.status(404).json(err)
        }
    }
    static async register(req, res) {
        try {
            const { nameAdm, emailAdm, passwordAdm } = req.body;
            let result = await admin.create({
                nameAdm,
                emailAdm,
                passwordAdm: encryptPwd(passwordAdm),
                imageAdm: 'http://via.placeholder.com/150',
            })

            result ?
                res.status(200).json({ message: 'User created successfully.' }) :
                res.status(400).json({ message: 'User creation failed.' })
        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async login(req, res) {
        try {
            const { emailAdm, passwordAdm } = req.body;
            let admFound = await admin.findOne({
                where: { emailAdm }
            })

            if (admFound) {
                if (decryptPwd(passwordAdm, admFound.passwordAdm)) {
                    const access_token = tokenGenerator(admFound)
                    res.status(200).json({
                        access_token
                    })
                } else {
                    res.status(403).json({ message: 'Invalid password.' })
                }
            } else {
                res.status(404).json({ message: 'Invalid email.' })
            }
        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async removeAdmin(req, res) {
        try {
            const id = Number(req.params.idAdm)
            let result = await admin.destroy({
                where: { id }
            })

            result ?
                res.status(200).json({ message: 'User deleted successfully.' }) :
                res.status(400).json({ message: 'User delete feiled.' })
        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async editAdmin(req, res) {
        try {
            const id = Number(req.params.idAdm);
            const { nameAdm, emailAdm, passwordAdm } = req.body
            let result = await admin.update({
                nameAdm,
                emailAdm,
                passwordAdm: encryptPwd(passwordAdm),
                imageAdm: 'http://via.placeholder.com/150',
            },
                {
                    where: { id }
                })

            result ?
                res.status(200).json({ message: 'User updated successfully.' }) :
                res.status(404).json({ message: 'User update feiled.' })
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = AdminController
