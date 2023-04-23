const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const port = 3000
const app = express()

app.use(cors())

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"kartkowka"
})
con.connect((err)=>{
    if(err){
        console.log(err)
    }else
    console.log("connected")
})
app.get("/login/:user/:pass",(req,res)=>{
    const user = req.params.user
    const pass = req.params.pass
    const sql = `SELECT upr FROM tab_kart WHERE user = "${user}" AND password = "${pass}"`

    con.query(sql,(err,result,fields)=>{
        if(err){
            res.send(err)
        } else {
            res.send(result)
        }
    })
})
app.listen(port)