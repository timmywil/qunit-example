import express from 'express'

const app = express()

app.use(express.static('.'))

app.listen(3000, function () {
  console.log('Visit http://localhost:3000')
})
