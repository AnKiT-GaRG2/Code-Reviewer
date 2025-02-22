const express = require('express');

const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')
const app = express()
const corsOptions = {
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  };
app.use(cors(corsOptions))
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.use('/ai', aiRoutes)

module.exports = app