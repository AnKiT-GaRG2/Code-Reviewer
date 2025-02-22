const express = require('express');

const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')
const app = express()

const allowedOrigins =['https://code-reviewer-frontend-mu.vercel.app'] 

const corsOption =  {
    origin: 
      (origin, callback) => {
          if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true); 
          } else {
            callback(new Error('Not allowed by CORS')); 
          }
        },
    credentials: true 
};
app.use(cors(corsOption))
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.use('/ai', aiRoutes)

module.exports = app