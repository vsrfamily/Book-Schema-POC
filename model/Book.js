const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    ISBN: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type:Number,
        required: true
    },
    noOfPages: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    category: {
        type: String,
        enum:['Science Fiction', 'Fantasy', 'Detective and Mystery','Comic', 'Horror'],
        default: 'Fantasy'
    },
    publisher: {
        type: String,
        required: true
    },
    publishedYear: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
    
    


}, {timestamps: true})

module.exports = mongoose.model('Book',BookSchema)