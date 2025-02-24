const express = require('express');
const app = express();
app.set('view engine','ejs')

app.get('/', (req,res)=>{
    res.end('hello World')
});

app.get('/khushal', (req,res)=>{
    // res.end('hello khushal')
    res.render('khushal.ejs')
});

app.listen(3000, ()=>{
    console.log("Server is running at http://localhost:3000");

});