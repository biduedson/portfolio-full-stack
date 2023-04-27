import mysql from 'mysql'
export const db = mysql.createConnection({
    host: "database-2.cgu8cv12esot.us-east-2.rds.amazonaws.com",
    user: "edson_arruda",
    password: "Biduzao1981",
    database: "bd_portfolio"
})