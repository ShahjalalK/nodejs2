const { UserController, createUser, updateUser, deleteUser } = require('../controler/user.controler')

const Router = require('express').Router()

Router.get('/', UserController)
Router.post('/', createUser)
Router.put('/:id', updateUser)
Router.delete('/:id', deleteUser)

module.exports = Router