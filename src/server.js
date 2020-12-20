const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');

// configer
env.config();

// time 25:00


//  mongodb+srv://root:<password>@cluster0.kufgz.mongodb.net/<dbname>?retryWrites=true&w=majority
    mongoose.connect(
        `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.kufgz.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        }
    ).then(() =>{
        console.log('database connected');
    });

// app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api',authRoutes);



// app.listen(2000);

app.listen(process.env.PORT, () => {
    console.log('Server is running');
});