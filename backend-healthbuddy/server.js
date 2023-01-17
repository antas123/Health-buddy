require('dotenv').config()
const mongoose = require('mongoose');

const express = require('express')
const workoutRoutes = require('./routes/workouts')
  

// express app
const app = express();

// middleware
app.use(express.json())

app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts',  workoutRoutes)


// connect database
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(()=> {
    // listen to requests
    app.listen(process.env.PORT, ()=>{
        console.log('listening on port', process.env.PORT)
    }) 
})
.catch(e=> console.log(e));


