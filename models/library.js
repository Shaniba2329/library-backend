const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "title":String,
        "category":String,
        "author":String,
        "price":String
    }
)
let librarymodel=mongoose.model("libraries",schema);
module.exports={librarymodel}