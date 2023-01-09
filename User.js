import mongoose from "mongoose";
/*
{
    "name":"admin",
    "login":"admin",
    "password":"admin"
}
*/
const User = new mongoose.Schema({
    name:{type: String, required:true},
    login:{type: String, required:true},
    password:{type: String, required:true},
    email:{type: String},
})

export default mongoose.model('User', User)
//, {collation:'users'}