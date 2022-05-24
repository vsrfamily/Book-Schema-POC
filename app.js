require('dotenv').config()
const express = require('express');
const app = express();
const BookRoute = require('./routes/bookRoutes')
const AuthorRoute = require('./routes/authorRoutes')

//database
const connectDB = require('./db/connect')

// middleware
app.use(express.json())

// routes
app.use('/api/books', BookRoute)
app.use('/api/author', AuthorRoute)

app.get('/', (req, res) => {
    res.send("Welcome to book shop")
})

const port = process.env.PORT || 3000;

const connect = async() => {
    try {
        await connectDB(process.env.url)
        app.listen(port, () => {
            console.log(`server is running on port ${port}....`)
        })
    }catch(error){
        console.log(error)
    }
}
connect();


