
const express = require("express");

const app = express();

app.use(express.json())

// http://localhost:port
// http://127.0.0.1:port

// initial get
app.get("/", (req, res) => {
    res.send("<h1>Server running</h1>");
});

app.get("/home", (req, res) => {
    res.send({ "message": "Welcome to home!!!!" })
})

app.listen(3000, () => {
    console.log("Server started at port num 3000");
});


// passing the data 
// path -- // :  // http://localhost:3000/user/1928378874
// query -- // ? // http://localhost:3000/users/search?roll=19a91a0264&name=vasanth
// body -- 

app.get("/user/:roll", (req, res) => {
    res.send(`<h1>Roll Number ${req.params.roll}</h1>`);
})

app.get("/users/search", (req, res) => {
    // object destructure
    console.log(req.query);
    const { roll, name } = req.query;
    res.send({
        roll: `${roll}`,
        name: `${name}`
    })
})


app.post("/user/add", (req, res) => {
    const { roll, name, branch, college, mobile } = req.body;
    res.send({
        rollNumber: roll,
        name: name,
        branch: branch,
        college: college,
        mobile: mobile
    });
})







