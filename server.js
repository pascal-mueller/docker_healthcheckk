const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  let n = Math.random()*10

  if (n < 5) {
    res.send('Web server running nicely. Like a cat.')
    console.log("Good")
  } else {
    res.status(500).send("Web Server Failed. 500.")
    process.exit(1)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
