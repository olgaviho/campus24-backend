const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (req, res) => {
    const users = await User
    .find({}).populate('threads', {title: 1, message: 1})
    res.json(users.map(u => u.toJSON()))
})

usersRouter.post('/', async (req, res, next) => {

    const body = req.body

    if (!body.username || !body.password || !body.name ||
        body.password === undefined || body.username === undefined || body.name == undefined) {
        return res.status(400).json({
            error: 'content missing'
        })
    }
    try {

        const saltRounds = 10

        const passwordHash = await bcrypt.hash(body.password, saltRounds)

        const user = new User({
            username: body.username,
            name: body.name,
            passwordHash,
        })

        const savedUser = await user.save()
        res.json(savedUser)

    } catch (e) {
        next(e)
    }
})

module.exports = usersRouter