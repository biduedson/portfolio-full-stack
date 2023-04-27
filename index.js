import express from "express";
import cookieParser from "cookie-parser";
import multer from "multer";
import auth from "./routes/auth.js"
import users from './routes/users.js'






const app = express()
app.use(express.json())
app.use(cookieParser())


app.use("/api/auth", auth)
app.use("/api/users", users)


app.listen(3300, () => {
    console.log("Servidor rodando|")
})