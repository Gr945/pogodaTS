const express = require('express')
const cors = require('cors')
const app = express()

const PORT = process.env.Port || 2224
const mongoose = require ('mongoose')

const sityRouter = require('./router/sityRout')


mongoose.connect('mongodb://localhost:27017/PROGECT_POGODA',
{useNewUrlParser: true, useUnifiedTopology: true})

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors({
  origin: true,
  credentials: true,
}))



app.use('/sity',sityRouter)


app.listen(PORT, () => {
  console.log(`Server in ${PORT} port`)
})
