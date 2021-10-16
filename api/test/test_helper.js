const mongoose = require("mongoose");


before (done =>{
    mongoose.connect("mongodb://localhost:27017/api_test");
    mongoose.connection
    .once("open", ()=>{
        console.log("Connected to the DB Test");
        done();
    })
    .on("error", err => {
        console.warn("Warning", err);
    });
});