const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;

const staticPath = path.join(__dirname, "../public");
//public static path

app.set('view engine', 'hbs');
app.use(express.static(staticPath));




//routing
app.get("",(req , res)=>{
    res.render('index');
});

app.get("/weather",(req , res)=>{
    res.render('weather');
});

app.get("/about",(req , res)=>{
    res.render('about');
});

app.get("*",(req , res)=>{
    res.render("404");
});



app.listen(port, "127.0.0.1", ()=>{
    console.log("Listening....")
});