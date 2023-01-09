import mongoose from "mongoose";

/*
{
    "id":"nameid",
    "time":"__:__",
    "text":"some text",
    "date":{
        "Y":2023,
        "M":0,
        "D":2
    }
}

*/
const Post = new mongoose.Schema({
    userId:{type:String, required:true},
    id:{type:String},
    userId:{type:String, required:true},
    time:{type: String, required:true},
    text:{type: String, required:true},
    date:{type: Object, required:true,
        Y:{type: Number, required:true},
        M:{type: Number, required:true},
        D:{type: Number, required:true}
    }
})

export default mongoose.model('Event', Post)
//, {collation:'events'}