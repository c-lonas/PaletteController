const express = require('express')
const app = express()

app.use(express.static("public/"))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log('Here')
    res.render('index')
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);