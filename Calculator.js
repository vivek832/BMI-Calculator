
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    //res.send("Hello World..");
    res.sendFile(__dirname+"/index.html");
});


app.post("/",function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var sum = num1+num2;
    //console.log(req.body);
    res.send("Result "+sum);
});


app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmiCalculator",function(req,res){
    var Height = parseFloat(req.body.Height);
    var Weight = parseFloat(req.body.Weight);
     var bmiVal = Weight/((Height/100)*(Height/100));
     res.send("Your BMI is "+bmiVal);
});


app.listen(3000,function(){
    console.log("Server started at 3000");
});