const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
    },
    address: {
        type: String,
        required: [true, "Please enter your address!"]
    },
    contact: {
        type: Number,
        required: [true, "Please enter your phone number!"]
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png"
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)