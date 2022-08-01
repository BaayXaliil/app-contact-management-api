const { addUser, updateUser, deleteUser, getUser, getAllUsers } = require('../controllers/userController')

const router = require('express').Router()

router.post('/add', addUser)

router.get('/', getAllUsers)

router.get('/:id', getUser)

router.put('/update/:id', updateUser)


router.delete('/delete/:id', deleteUser)


module.exports = router