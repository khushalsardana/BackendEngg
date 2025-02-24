const express = require('express');
const app = express();
app.set('view engine','ejs')

app.get('/', (req,res)=>{
    res.end('hello World')
});

app.get('/index', (req,res)=>{
    // res.end('hello khushal')
    res.render('index.ejs')
});

app.get('/index2', (req,res)=>{
    // res.render('index2')
    // res.render('index2.ejs') // its also same thing like above line
    let todo = ["apple", "mango", "banana", "Guru Chela"]
    // data fetching from database to file
    let name = "Khushal";
    let karan = {
        name: "karan don",
        age: 20,
        dist: "Chandigarh",
        college: "CU"
    }
    res.render('index2', {finalName: name ,fruits: todo, karan: karan});
});

app.listen(3000, ()=>{
    console.log("Server is running at http://localhost:3000");

});