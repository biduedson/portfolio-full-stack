import { db } from "../db.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export const login = (req, res) => {
    const select = "SELECT * FROM users WHERE email = ?"

    db.query(select, req.body.email, (err, data) => {
        if (err) return res.json(err)
        if (data.length === 0) return res.status(404).json("Usuario não encontrado")
        const passwordCheck = bcrypt.compareSync(req.body.password, data[0].password);
        if (!passwordCheck) return res.status(400).json("Usuario ou senha incorretos")
        const token = jwt.sign({ id: data[0].id }, "E245g578a14gtre", {
            expiresIn: "60m"
        })
        const { password, ...others } = data[0]
        res.cookie("acess_token", token, {
            httpOnly: true,
        }).status(200).json(others)

    })
}

export const register = (req, res) => {
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.json(err)
        if (data.length) return res.status(400).json("Este usuario ja exite!")
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        const insert = 'INSERT INTO users (`username`, `email`, `password`) VALUES (?)'
        const values = [
            req.body.username,
            req.body.email,
            hash
        ]
        db.query(insert, [values], (err, data) => {
            if (err) return res.send.json(err)
            return res.status(201).json("Usuario cadastrado com sucesso")
        })
    })

}


export const logout = (req, res) => {
    res.clearCookie("acces_token", {
        samesite: "none",
        secure: true
    }).status(200).json("Usuario deslogado")
}