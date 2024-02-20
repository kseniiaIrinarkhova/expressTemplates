//Import resources
//Express
const express = require("express");
//Response-time
const responseTime = require('response-time');
//Pug view engine
const pug = require("pug");

const app = express();
const PORT = 3000;


//Middleware
//added response time to header
app.use(responseTime());
//added ability to see some static files
app.use(express.static('./static'))


// error handler
app.use((err, req, res, next) => {
    res.status(400).send(err.message);
});
//routes

//main route
app.get("/", (req,res)=>{
    res.send(pug.renderFile('./view/index.pug', { pageTitle: 'Express App' }))
})

//route with user data
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

//route for picture downloading
app.get('/pugpic',(req,res)=>{
    res.download('./static/pug.png', 'pug.png')
})

//listening
app.listen(PORT, ()=>{
    console.log(`Server is listening on port: ${PORT}.`)
});
