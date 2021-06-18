const express = require("express");
const request = require("request");
const PORT = 5000;
//import bodyParser = require("body-parser");
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

require('./User')

//Initialise server/app
let app = express();
const User = mongoose.model("User")

app.use(express.urlencoded({extended: true}));
app.use(express.json())

const mongoUri = "mongodb+srv://josephkimera:%24TechsUrvyBb%23@cluster0.6hmmu.mongodb.net/appDB?retryWrites=true&w=majority"
//mongodb+srv://josephkimera:<password>@cluster0.6hmmu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected",()=>{
    console.log("connected to mongo yeahhh")
})
mongoose.connection.on("error",(err)=>{
    console.log("error",err)
}) 

mongoose.connect(mongoUri, function(err, db) {  
    if (err) throw err;  
    var query = { surName: "Kimera" };  
    db.collection("users").find(query).toArray(function(err, result) {  
    if (err) throw err;  
    console.log(result); 
    console.log(result[0]); 
    console.log(result[0].surName)
   
    db.close();  
    });  
    });

//app.use(bodyParser());
app.get("/welcome", function(req, res){
      res.send("welcome to the web server")
})
app.get("/one", function(req, res){
    res.send("FINALLY SET UP POSTMAN")
})
const weather_uri = "http://api.weatherstack.com/current?access_key=b4d63333931beb87abce01ca6368f0fb&query=Kampala"


app.get("/weather", function(req,res){
    request(weather_uri,function(error, response, body){
        if(!error && response.statusCode == 200){
            console.log(body)
           var parsedBody = JSON.parse(body)
           var temp = parsedBody['current']['temperature']
           console.log(parsedBody)
           console.log("THE TEMPERATURE IS "+ temp)
            res.send(parsedBody)
        }
        else{
            console.log("wrong API")
            res.send("NO API FOUND")
        }
    })
})


app.post('/signUp',(req,res)=>{
    const member = new User({
        surName:req.body.surName,
        givenName:req.body.givenName,
        gender:req.body.gender,
        nationality:req.body.nationality,
        idType:req.body.idType,
        idNumber:req.body.idNumber,
        yob:req.body.yob,
        date:req.body.date,
        telNoI:req.body.telNoI,
        telNoII:req.body.telNoII,
        email:req.body.email,

      })

    member.save()     //SAVES MEMBER TO COLLECTION/TABLE users IN appDB
    .then(data=>{
        console.log(data)
        res.send(data)
    })

    // mongoose.connect(mongoUri, function(err, db) {
    //     if (err) throw err;
    //     db.collection("members").insertOne(user, function(err, res) {
    //       if (err) throw err;
    //       console.log("1 document inserted");
    //       db.close();
    //     });
    //   });
})


app.listen(PORT, function() {
         console.log("SERVER IS READY " + PORT);
     });

  


