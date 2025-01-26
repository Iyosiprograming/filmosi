import express from 'express';
const app = express()
import { register } from '../model/register_model.js';

app.post("/register",async (req,res)=>{
    try{
        const {email , username , password } = req.body;
    }
    catch{}
});