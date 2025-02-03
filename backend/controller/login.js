import express from 'express';
import { login } from '../model/login_model.js';
const app = express()

app.post("/login", async (req, res) => {
    try{
        const { email, password} = req.body
        const result = await login(email, password);
        
        if(result){
            res.send("Login Sucessfully");

        }
        else{
            res.send("Login Failed")}
    }
    catch{console.error("Error in login");
    }
    

});