const express = require('express');

const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')
const app = express()

const allowedOrigins =['http://localhost:5173'] 

const corsOption =  {
    origin: 
      (origin, callback) => {
          if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true); // Allow request
          } else {
            callback(new Error('Not allowed by CORS')); // Deny request
          }
        },
    credentials: true // Allow credentials like cookies
};
app.use(cors(corsOption))
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.use('/ai', aiRoutes)

module.exports = app