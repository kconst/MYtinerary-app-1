import mongoose from "mongoose";
const Schema = mongoose.Schema;

//create activity schema
const ActivitySchema = new Schema(
    {
        activityImage: String, 
        activityCaption: String,
        title: String,
        city: String,
        id: mongoose.Schema.Types.ObjectId 
        
    }
);

module.exports = mongoose.model("Activity", ActivitySchema);