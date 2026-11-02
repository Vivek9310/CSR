const mongoose = require("mongoose");
const Student = require("./models/student");

mongoose.connect("mongodb://localhost:27017/CSR")
    .then(()=>{console.log("DB conected!")})
    .catch(()=>{console.log("DB not conected")})

Student.create([
    {
        name:'ritik',
        email:'rahul@gmail.com',
        course:'JAVA'
    },
    {
        name:'ajay',
        email:'ajay@gmail.com',
        course:'C'
    },
    {
        name:'sourav',
        email:'rohit@gmail.com',
        course:'C++'
    }
]).then(()=>{console.log("Seeded!")})