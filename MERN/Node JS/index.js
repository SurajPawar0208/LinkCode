// const fileop = require("./fileop");

// // fileop();
// // test()
// const http=require("http")
// const port=3003;

// const server = http.createServer((req,res)=>{  
//     res.setHeader('Content-Type','text/html');
//     if(req.url==='/'){
//     res.end("<h1>Hello Suraj, This is my first server</h1>");
// }else if(req.url==='/home'){
//     const data=file.readFileSync("home.html")
//     res.end(data.toString());
// }else if(req.url==='/about'){
//     res.end("This is about page");
// }else{
//     res.end("<h1>404 Page not found</h1>");
// }
// });

// server.listen(port,()=>{
//     console.log(`Server is listening on port number ${port}`);
// });
const database = require("./database");
const express = require("express");

const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello Suraj, This is my first server using express</h1>");
});

app.listen(port, () => {
    console.log(`Server is listening on port number ${port}`);  
});
database();
