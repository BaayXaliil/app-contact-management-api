const UserModel = require('../models/userModel')

const userCtrl = {
    addUser: async (req, res) => {
        try {
            const { name, email, address, contact } = req.body
            const user = { name, email, address, contact }

            const newUser = new UserModel(user)

            await newUser.save()

            res.json({ msg: "User has been added!" })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getUser: async (req, res) => {
        try {
            const user = await UserModel.findById(req.params.id)
            
            res.json(user)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getAllUsers: async (req, res) => {
        try {
            const users = await UserModel.find()
            res.json(users)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    updateUser: async (req, res) => {
        try {
            const { name, address, contact, email } = req.body
            await UserModel.findByIdAndUpdate(req.params.id, {
                name, address, contact, email
            }, {new: true}).then((user) => {
                if (!user) res.status(404).json({msg: "User not found"})
                res.json({ msg: "Update Success!", user })
            }).catch(err => {throw Error(err)})

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    deleteUser: async (req, res) => {
        try {
            await UserModel.findByIdAndDelete(req.params.id)

            res.json({ msg: "Deleted Success!" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}




module.exports = userCtrl