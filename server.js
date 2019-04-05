const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');
const postRoutes = require('./Routes/postRoutes');

mongoose.connect('mongodb://localhost:27017/webTech', {
        useNewUrlParser: true
    })
    .then(_ => {
        console.log('Connection with Mongodb established successfully');
    })
    .catch(err => {
        console.log('Error While Establishing Connection' + err);
    });
mongoose.set('useCreateIndex', true);

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    next();
});

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/api/posts', postRoutes);

app.use((req, res, next) => {
    const error = new Error('404 Not Found');
    error.status = 404;
    next(error);
});


app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        success: false,
        msg: error.message
    });
});

const PORT = process.env.port || 3001;

app.listen(PORT, _ => {
    console.log(`Server is running on ${PORT}`)
})