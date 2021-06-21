const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const { ADMIN } = require('./db/model')

passport.use(
  new LocalStrategy(async function (admin_name, admin_password, done) {
    try {
      const admin = await ADMIN.findOne({
        where: { admin_name}
      })

      if (!admin) {
        // no ADMIN with that username found
        return done(null, false)
      }
      
      bcrypt.compare(admin_password, admin.admin_password, function (err, res) {
      
      //Checking if some error occured 
      if (err) return done( err )
      
      //checking whether password matches
      if (res === false){ 
       
        return done(null, false, { message: 'Incorrect password' })
      }          
      
      return done(null, admin)
      })
      
    } catch (err) {
      done(err)
    }
  })
)

passport.serializeUser (function (admin, done) {

  done(null, admin.admin_id)
})

passport.deserializeUser (async function (userId, done) {
 
  try {
    admin_id=userId
    const admin = await ADMIN.findByPk(admin_id)
    if (admin) 
      return done(null, admin)
    else 
      throw new Error('Could not deserialise User')    
  } catch (err) {
    done(err)
  }
})

module.exports = {
   passport
}