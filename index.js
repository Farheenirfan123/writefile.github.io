const express = require('express')
const path = require('path')
const app = express()
const fs = require('fs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")))
// ye humare pas public ke folder ke under jo bhi files hongi us ka path humne yaha jor diya ha
app.set('view engine', 'ejs') 
//ye view engine ejs pages ko render krega

app.get('/' , function(req, res){
    fs.readdir("./files", function(err, files){
        res.render('index', {files: files})
    })
})
app.get('/file/:filename' , function(req, res){
   fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err,filedata){
    res.render('show', {filename: req.params.filename, filedata: filedata})
    
   })   
})

app.get('/edit/:filename' , function(req, res){
  res.render('edit', {filename: req.params.filename})
    })

 app.post('/edit' , function(req, res){
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, function(err){
        res.redirect("/")
    })
   }) 
   

app.post('/create' , function(req, res){
   fs.writeFile(`./files/ ${req.body.title.split(' ').join('')}.txt` , req.body.details, (err)=>{
    res.redirect("/")
   })
    })

    app.get('/delete/:filename', function (req, res) {
        fs.unlink(`./files/${req.params.filename}`, function (err) {
        res.redirect("/");
            
        });
    });
        
app.listen(3000, function(req, res){
    console.log('running port on 3000')
})