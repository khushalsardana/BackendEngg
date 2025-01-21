const { log } = require("console");
const fs = require("fs");

console.log("Hello 1");

// sync-> blocking operations

// let  result = fs.readFileSync("file1.txt", "utf8");
// console.log(result);



// async -> non - blocking operations

fs.readFile("file1.txt", "utf8", (error,data)=>{
    if(error){
        throw error;
    }
    else{
        console.log(data);
        
    }
})

console.log("Hello 2");
