let Users = require('../models/user.model')
const { v4: uuidv4 } = require('uuid');
const UserController =  (req, res) => {
    res.status(200).json({
        Users
    })
}
const createUser =  (req, res) => {
    const newUser = {
        id: uuidv4(),
        userName : req.body.name,
        email: req.body.email
    }
    Users.push(newUser)
    res.status(2001).json({
       Users
    })
}

const updateUser =  (req, res) => {
    const id = req.params.id
    const {userName, email} = req.body
    Users.filter((user) => user.id === id).map((selectedUser) => {
        selectedUser.userName = userName,
        selectedUser.email = email
    })
    
    res.status(200).json({
       Users
    })
}

const deleteUser =  (req, res) => {
    const id = req.params.id    
    Users = Users.filter((user) => user.id !== id)
    res.status(200).json({
       Users
    })
}

module.exports = {UserController, createUser, updateUser, deleteUser}