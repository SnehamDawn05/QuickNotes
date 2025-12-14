import mongoose from "mongoose"

// create a schema
// build a model based on that schema

const noteSchema= new mongoose.Schema(
    { //obj1
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }
},
    {timestamps:true} //obj2 : on writting this line of code mongodb will automatically give created at and updated at times
);

const Note= mongoose.model("Note", noteSchema)

export default Note