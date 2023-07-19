import mongoose from "mongoose"
const { Schema } = mongoose;
var cardSchema = mongoose.Schema(
    {
        eyebrow: {
            type: String,
            required: [true, 'add text for eyebrow']
        },

        title: {
            type: String, 
            required : [true, 'add text for title'],
            unique: true,
        },

        body: {
            type: String,
            required: [true, 'add text for body'],
        },
        cta: {
            type: String,
            required: [true, 'add url for call to action'],
        },
        order:{
            type: Number,
            required: [true, 'add a number that represents the order the card should be displayed in'],
        },
        createdAt: Date,
        modifiedAt: Date,
        
    }
)
const  Card = mongoose.model('Card', cardSchema);
export default Card