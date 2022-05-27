require('dotenv').config()
const express = require('express');
const app = express();
const BookRoute = require('./routes/bookRoutes')
const AuthorRoute = require('./routes/authorRoutes')
const cors = require("cors");

//const path = require('path')

//database
const connectDB = require('./db/connect')
//swagger
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const options = {
    definition: {
        openapi : "3.0.0",
        info: {
            title: 'Book Schema API',
            version: '1.0.0'
        },
        servers: [
            {
               url: "http:/",
               description: "My API Documentation"
            }
        ]
    },
    apis: ['./routes/*.js']
}
const swaggerSpec = swaggerJsDoc(options)

// middleware
app.use(express.json())
app.use(cors());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))
// routes

app.use('/api/books', BookRoute)
app.use('/api/author', AuthorRoute)


app.get('/', (req, res) => {
    res.send("Welcome to book show")
})

const port = process.env.PORT || 3000;

const connect = async() => {
    try {
        await connectDB(process.env.Mongo_url)
        app.listen(port, () => {
            console.log(`server is running on port ${port}....`)
        })
    }catch(error){
        console.log(error)
    }
}
connect();


