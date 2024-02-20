const express = require("express");
const responseTime = require('response-time');

const app = express();

const PORT = 3000;


//Middleware
app.use(responseTime());



// error handler
app.use((err, req, res, next) => {
    res.status(400).send(err.message);
});
//routes

app.get("/", (req,res)=>{
    res.send("Hello Express!")
})


//listening
app.listen(PORT, ()=>{
    console.log(`Server is listening on port: ${PORT}.`)
});


//helper functions:
