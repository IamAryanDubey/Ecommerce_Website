import mongoose, { Schema } from "mongoose";

const itemSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    ram:{
        type: String
    },
    screen_size:{
        type: String,
    },
    camera:{
        type: String,
        required: true
    },
    battery:{
        type: String,
        required: true
    },
    os:{
        type: String,
        required: true
    },
    platform:{
        type: String,
        required: true
    },
    pictures:{
        type: String,
        required: true
    }
})

const Item = mongoose.model('item', itemSchema);

export default Item;