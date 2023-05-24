const express = require('express');
const path = require('path')


const app = express();

const PORT = 3000;

app.set('view engine', 'ejs')

const createPath = (page) => path.resolve(__dirname,'views',`${page}.html`)

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
  }); 

 app.get('/',(req,res)=>{
    const title = 'TODOS'
res.sendFile(createPath('index'))
    res.status(200)
 })

app.use(express.static('styles'));