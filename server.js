const express = require("express");
const responseTime = require('response-time');
const pug = require("pug");

const fs = require("fs");


const app = express();

const PORT = 3000;


//Middleware
app.use(responseTime());
app.use(express.static('./static'))


// error handler
app.use((err, req, res, next) => {
    res.status(400).send(err.message);
});
//routes

app.get("/", (req,res)=>{
    res.send(pug.renderFile('./view/index.pug', { pageTitle: 'Express App' }))
})

app.get('/:name/:favNumber', (req,res)=>{
    const user = req.params.name
    const num = req.params.favNumber
    let sum = 0;
    Array.prototype.forEach.call(num, (digit) => {
        sum += parseInt(digit)
    });
    res.send(pug.renderFile('./view/user.pug', { 
        pageTitle: `${user} Fansy Page`,
        userName: user,
        favNum: num,
        sum: sum
     }))

})

app.get('/pugpic',(req,res)=>{
    console.log("It works!")
    res.download('./static/pug.png', 'pug.png')
    // res.sendStatus(200)
})

//listening
app.listen(PORT, ()=>{
    console.log(`Server is listening on port: ${PORT}.`)
});


//helper functions:
