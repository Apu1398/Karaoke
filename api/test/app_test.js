const assert = require("assert");

const request = require("supertest");

const app = require ("../server.js");


describe("Express app", () =>{
    it("Handles GET request auth/signup", done =>{
        request(app)
        .post("/api/auth/signup")
        .set("Content-Type", "application/json")
        .send({"username": "jcm", "email": "josuecub.mont@hotmail.com", "password": "abcd", "roles": ["user"]})
        .expect(200)
        .end((err,res) => {

            if(err) return done(res);
            console.log(res);
            done();
            
         });
          
    });



});