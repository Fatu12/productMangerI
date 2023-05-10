const mongoose = require("mongoose")
// Schema is going to be part mongoose that hold all the information 
const ProductSchema = new mongoose.Schema({
    title:{
        type:String, 
        required :[true, 'Title is required'],
        minLength : [2,'Title must be at least 2 characters  long'],
        maxLength : [255, 'Title cannot be more than 255 characters  long']

    },
    price:{
        type: Number,
        required : [true,'prince is required'],
        minLength :[2, 'price must me at least 2 character'],
        maxLength : [10, 'price cannot be more than 10 characters ']

    },
    description:{
        type: String ,
        required : [true, 'description required'],
        minLength: [5, 'description must be at least 5 characters'],
        maxLength : [200, 'description must be at least 200n character']

    }

},
{timestamps: true});
module.exports = mongoose.model("product", ProductSchema)
