const express = require('express');
const conn = require('./conn');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

console.log(process.env.DB_PORT);

//get user
app.get("/api/users/", (req, res) => {
    conn.query("SELECT * FROM users", (err, result) => {
        if(err) 
            console.log(err);
        res.status(200).json(result);
    });
});

//Registeration
app.post("/api/users/create", (req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const passd = req.body.passd;
    const age = req.body.age;
    const DOB = req.body.DOB;
    const phone_no = req.body.phone_no;
    conn.query("INSERT INTO users(first_name, last_name, email, passd, age, DOB, phone_no) VALUES(?, ?, ?, ?, ?, ?, ?)", 
    [first_name, last_name, email, passd, age, DOB, phone_no], (err, result) => {
        if(err) console.log(err);
        console.log(result);
        res.send(result);
    });
});

//Login
app.post("/api/users/login", (req, res) => {
    const email = req.body.email;
    const passd = req.body.passd;

    conn.query("SELECT * FROM users WHERE email = ? AND passd = ?", [email, passd], (err, result) => {
        if(err) 
			res.status(404).json({err:"Wrong Details"});
        else if(result.length == 0)
			res.status(201).json({err:"Wrong Details"});
        else
			res.status(200).json(result);
    });
    
})

//Update
app.post("/api/users/create", (req, res) => {
    const id = req.body._id;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const passd = req.body.passd;
    const age = req.body.age;
    const DOB = req.body.DOB;
    const phone_no = req.body.phone_no;

    conn.query("UPDATE users first_name = ? , last_name = ? , email = ? , passd = ? , age = ? , DOB = ? WHERE _id = ?", 
    [first_name, last_name, email, passd, age, DOB, phone_no, id], (err, result) => {
        if(err) console.log(err);
        console.log(result);
        res.send(result);
    });
});
app.listen(process.env.PORT, ()=>{
    console.log("Listening...");
});
