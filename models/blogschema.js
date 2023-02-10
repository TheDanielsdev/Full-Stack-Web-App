const mongoose = require('mongoose');
const schema = mongoose.Schema({
    title: {
       type: String,
       required: true
    },

    desc: {
       type: String,
       required: true
    }
}, {timestamps: true});




const Blog = mongoose.model('Blog', schema);
module.exports = Blog;




