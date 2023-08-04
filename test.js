const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true});

BlogPost.create({
  title: "Blogpost Title Placeholder",
  body: "Lorem Ipsum sample text"
})
