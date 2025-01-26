// this is the schema for the user registration
import mongoose from "mongoose";
const registerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

const Register = mongoose.model('Register', registerSchema);
module.exports = Register;