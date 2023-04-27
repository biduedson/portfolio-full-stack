
import { db } from '../db.js'


export const user = (req, res) => {
    const selectAllUser = 'SELECT * FROM users WHERE username = ?'

    db.query(selectAllUser, [req.params.userName], (err, data) => {
        if (err) return res.json(err)
        if (data.length === 0) return res.status(404).json("Usuario não encontrado")
        const { password, ...rest } = data[0]

        return res.status(200).json(rest)

    })
}

export const updateUser = (req, res) => {
    const update = 'UPDATE users SET username = ? , fullname = ? , profession = ?, img = ?  WHERE id = ?'
    const {
        username,
        fullname,
        profession,
        img,
        id } = req.body

    const inputs = [
        username,
        fullname,
        profession,
        img,
        id
    ]
    db.query(update, inputs, (err, data) => {
        if (err) return res.json(err)
        return res.status(204).json()
    })
}

export const updateSocialNetworks = (req, res) => {
    const update = 'UPDATE users SET github_link = ?, linkedin_link = ?, instagran_link = ?, facebook_link = ? WHERE id = ?'
    const {
        github_link,
        linkedin_link,
        instagran_link,
        facebook_link,
        id } = req.body

    const inputs = [
        github_link,
        linkedin_link,
        instagran_link,
        facebook_link,
        id
    ]
    console.log(inputs)

    db.query(update, inputs, (err, data) => {
        if (err) return res.json(err)
        return res.status(204).json()
    })
}