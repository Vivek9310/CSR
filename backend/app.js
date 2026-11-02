const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

// app.use(cors({origin: 'http://example.com'}))

// app.use(cors({origin:'http://127.0.0.1:5500'}))   //specific domain mention ki hai bs 
//usse hi hogi

app.use(cors());   //isse API sab froentend ke liye accesible ho jaayega

app.use(express.json())    //req.body undefined na aaye isliye, pehle SSR ke case me 
//url se data aata tha to hum encoder karke kuch use karte the aur ab json format me 
//aa raha hai frontend se to ye use karenge

mongoose.connect("mongodb://localhost:27017/CSR")
    .then(()=>{console.log("DB conected!")})
    .catch(()=>{console.log("DB not conected")})



//////routes//////

app.get("/",(req,res)=>{
    res.json({msg:"working fine!"})
})

const studentRoutes = require("./routes/student");
app.use(studentRoutes);

const PORT = 5000;
app.listen(PORT,()=>{
    console.log("server listen at port",PORT);
})