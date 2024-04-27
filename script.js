console.log('hello')
const fs = require('fs')

fs.writeFile("hello.txt", "copy", function(err){
    if(err) console.error(err)
    else console.log('rename')
})
// app.get('/profile/:username' , function(req, res){
//     res.send(`welcome ${req.params.username}`)
//     })
    
// app.get('/profile/:username/:age' , function(req, res){
//  res.send(`welcome ${req.params.username} of age ${req.params.age}`)
//         })