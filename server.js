const express = require('express');
const path = require('path')

const Post = require('./post');

const { default: mongoose } = require('mongoose');
const app = express();

const PORT = 3000;

const db = 'mongodb+srv://otovmid:12qwerty1A@cluster0.73suz04.mongodb.net/ToDo-list?retryWrites=true&w=majority'

mongoose
.connect(db,{useNewUrlParser: true,useUnifiedTopology:true})
.then((res) => console.log('Connected to the database'))
.catch((error)=> console.log(error))

app.set('view engine', 'ejs')

const createPath = (page) => path.resolve(__dirname,'views',`${page}.html`)


  app.use(express.static('styles'));

 app.get('/',(req,res)=>{
    const title = 'TODOS'
res.sendFile(createPath('index'))
    res.status(200)
 })

 app.get('/task',(req,res)=>{
    res.sendFile(createPath('task'))
    res.status(200);
 })
 app.get('/tasks',(req,res)=>{
    res.sendFile(createPath('tasks'))
    res.status(200);
 })
 app.get('/add-task',(req,res)=>{
    res.sendFile(createPath('add-task'))
    res.status(200);
 })
//  app.post('/tasks',(req,res)=>{
//     const {title} = req.body;
//     const post = new Post({title})
//     post
//     .save()
//     .then((result)=>res.redirect('/posts'))
//     .catch((error) => {
//         console.log(error);
//         res.render(createPath('error'), { title: 'Error' });
//       });
//  })

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
  }); 