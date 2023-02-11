const express = require('express');
const Blog = require('../models/blogschema');

const router = express.Router();




router.post('/blogs', (req, res) => {
    const postBlog = new Blog(req.body);
    postBlog.save()
    .then((result) => {
        res.redirect('/');
    })
    .catch((err) => {
        console.log(err)
    })
}); 

router.get('/blogs', (req, res) => {
    res.render('create_blog');
})


router.get('/blogs/:id', (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
  .then((result) => {
    res.render('details', {result})
  })
  .catch((err) => {
    
    console.log(err);
  })

});


// router.delete('/blogs/:id', (req, res) => {
//     const id = req.params.id;
//     Blog.findByIdAndDelete(id)
//     .then((result) => {
//       res.redirect('/')
//     })
//     .catch((err) => {
      
//       console.log(err);
//     })
  
//   });


module.exports = router;
