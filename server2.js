const http= require("http");
const server = http.createServer((req,res)=>{
    console.log("Hello");
    res.end("Chitkara University");
})

server.listen(3000);