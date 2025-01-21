// console.log(module)

const { log } = require("console");
const http = require("http");
// console.log(http);

const server = http.createServer((req, res) => {
    console.log("Request is coming");
    // console.log(req);
    res.end()
});

server.listen(3000, ()=>{
    console.log("Server is Running");
    
}) 