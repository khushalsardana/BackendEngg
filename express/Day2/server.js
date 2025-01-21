const express= require('express');
const app =  express();

app.use((req,res,next)=>{
    console.log();
    console.log();
    console.log();
    console.log();
    next();
    
})
app.get('/', (req, res)=>{
    res.send('Hello World');
})

app.get('/about', (req, res)=>{
    res.send('About US');
})

app.get('/reddit/:data', (req, res)=>{
    console.log(req.params);
    
    res.send('Reddit Page');
})

app.get('/reddit/:profile/:', (req, res)=>{
    console.log(req.params);
    
    res.send('Reddit Page Comments');
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
    
})