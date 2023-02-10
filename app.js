const express = require('express');
const mongoose = require('mongoose');
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

app.get('/blogs', (req, res) => {
    res.render('create_blog');
})


app.post('/blogs', (req, res) => {
    const postBlog = new Blog(req.body);
    postBlog.save()
    .then((result) => {
        res.redirect('/');
    })
    .catch((err) => {
        console.log(err)
    })
}); 


app.get('/blogs/:id', (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
  .then((result) => {
    res.render('details', {result})
  })
  .catch((err) => {
    
    console.log(err);
  })

})

