import express from 'express';
import { login } from '../model/login_model.js';
const app = express()

app.post("/login", async (req, res) => {
    try{
        const { email, password} = req.body
    }
    catch{}
    

});