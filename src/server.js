const express = require('express')
const session = require('express-session')

const { db } = require('./db/model')
const { itemRoute } = require('./route/item')
const{requestRoute}=require('./route/request')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: '24knb6k247b2k7b2k7bk247hb2kh7b2',
  }))
  
app.use('/api/item', itemRoute)
app.use('/api/request',requestRoute)
app.use('/', express.static(__dirname +'/public'))
app.use('/images', express.static(__dirname +'/images'))

/*
app.get('/',(req,res)=>{
    res.redirect('/api/item')
})
*/

const PORT=process.env.PORT||5353
db.sync({force:true})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server started on ${PORT}`)
    })
  })
  .catch((err) => {
    console.error(new Error('Could not start database'))
    console.error(err)
  })
