const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json()) // for parsing application/json

app.get("/", (req, res)=>{
    // res.send("Hello World");
    res.render("index");
});

app.get("/g23", (req, res)=>{
    console.log("get request on g23");
    console.log(req.query);
    res.send("Hello G23 Get Method Handled");
});

app.post("/g23", (req, res)=>{
    console.log("Post request on g23");
    console.log(req.body);
    res.send("Hello G23 Post Method Handled");
});


app.listen(3000, ()=>{
    console.log("server is running at port 3000");
    
})