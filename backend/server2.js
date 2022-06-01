const express = require('express')
const app = express()
const port = 3000

app.use(express.static('../frontend'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/save',(req, res) => {
    res.send(req.body)
    res.send("")
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})