const bodyParser = require('body-parser')
const BlogPost = require('./models/BlogPost.js')
const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const ejs = require('ejs')
const app = express()

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, () => {
  console.log('app listening');
})

app.get('/', (req,res) => {
  res.render('index');
})

app.get('/about', (req,res) => {
  res.render('about');
})

app.get('/contact', (req,res) => {
  res.render('contact');
})

app.get('/post', (req,res) => {
  res.render('post');
})

app.get('/posts/new', (req, res) => {
  res.render('create');
})

app.post('/posts/store', async (req, res) => {
  await BlogPost.create(req.body)
  console.log(req.body)
  res.redirect('/');
})
