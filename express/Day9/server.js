const express = require('express');

const app = express();
const port = 3000;

const verify = (req, res, next) => {
    // console.log("Verify Middleware OTP");
    if(req.query.otp==="1234"){
        console.log("Verifying The OTP")
        next();
    } else{
        res.send("OTP is Wrong");
        console.log("Wrong OTP");
    }
}












app.use((req,res,next) => {
    console.log('Time', Date.now());
    next();
})

app.use('/payment', verify, (req,res,next) => {
    console.log('Payment Done');
    res.send('Payment Page')
    next();
})

app.use('/g23', (req,res,next) => {
    console.log('G23 Middleware');
    res.send('g23 Page')
    next();
})

app.get('/', (req,res)=> {
    res.send("Hello G23 Payment Page")
})

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})