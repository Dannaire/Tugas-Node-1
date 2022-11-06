const express = require('express')
const app = express()
const port = 8081
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
res.render('index.ejs')
})
app.listen(port, () => {
console.log(`Server di port ${port}`)
})