console.log("Aashish");
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req, res)=>{
    res.send('aashish.yadav.1')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 