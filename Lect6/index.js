//importing nativnode modules
const http = require('http');


//importing third party packages
const express = require("express");
const app = express();



app.use((req,res, next)=>{
    console.log(`in the middleware`)
    
})

app.use((req,res, next)=>{
    console.log(`in the another middleware`)
    res.send('<h1>hello from express</h1>');
})


console.log("server is up and listening on port 3000")

app.listen(3000)