const User = require("../models/User")

const createUser = async (req, res) => {
    const { body } = req
    await User.create(body)
    res.json(body)
}

const getAllUsers = async (req, res) => {
    const data = await User.findAll()
    res.json(data)
}

const getUser = async (req, res) => {
    const { id } = req.params
    const data = await User.findByPk(id)
    res.json(data)
}

const updateUser = async (req, res) => {
    const { body, params: { id } } = req
    const user = await User.findByPk(id)
    user.name = body.name ? body.name : user.name
    user.email = body.email ? body.email : user.email
    user.country = body.country ? body.country : user.country
    user.gender = body.gender ? body.gender : user.gender
    user.save()
    res.json(user)
}

const deleteUser = async (req, res) => {
    const { params: { id } } = req
    const user = await User.findByPk(id)
    user.destroy()
    res.json(user)
}

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}