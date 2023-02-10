const express = require('express');
const mongoose = require('mongoose');
const blogRoute = require('./route/blogRoute')
const Blog = require('./models/blogschema');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

const dbURI = 'mongodb+srv://Thedanielsdev:Thedanielsdev@mytest.kveejva.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect( dbURI , {useNewUrlParser : true, useUnifiedTopology: true})
.then((result) => {
    app.listen(3000, () => {
        console.log(
            'App is running'
        )
    });
})
.catch((err) => {
    console.log(err);
})






app.get('/', (req, res) => {
   Blog.find()
 .then((lists) => {
    res.render('index', {lists});
 })
 .catch((err) => {
    console.log(err)
 })
});



app.use( blogRoute );
