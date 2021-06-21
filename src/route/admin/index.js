const Router = require('express')
const bcrypt = require('bcrypt')
const{ ADMIN } = require('../../db/model')
const {passport} = require('../../passport-setup')

const route = Router()

route.get('/setup', async (req, res) => {
	const exists = await ADMIN.findOne({ where:{admin_name: "admin"} })
	
    if (exists) {
	
        res.redirect('/')
		return
	}

	bcrypt.genSalt(10, function (err, salt) {
    
		if (err) return next(err)
		
        bcrypt.hash("piyush@9968957038", salt, function (err, hash) {
	
            if (err) return next(err)
			
            const Admin = ADMIN.create({
				admin_name: "admin",
				admin_password: hash
			})
       
        res.redirect('/')
		})
	})
})


route.get('/login', async (req, res) => {
   
    const Admin = req.user
    console.log(Admin)
   await res.status(201).send(Admin)
})
  
route.post(
    '/login',
      passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/'
    })
  )
  
route.get('/logout' ,(req,res)=>{
      req.logout()
      res.redirect('/')
})
  
module.exports={
    adminRoute: route
}