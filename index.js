const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World...!')
})

app.get('/chu',function(req,res){
    return res.send('Hello Chu');
})

// 127.0.0.1 - localhost


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})