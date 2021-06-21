const Router= require('express')

const route= Router()

const { makeRequest,showRequest } = require('../../controller/request')

route.get('/',async (req,res)=>{
    const requests= await showRequest()
    if(!requests){ return res.status(200).redirect('/')}
    res.status(200).send(requests)
})

route.post('/', async (req, res) => {

    const request_name= req.body.request_name
    const request_description= req.body.request_description
    const request_contact= req.body.request_contact
    const request = await makeRequest(request_name,request_description,request_contact)
  
    res.status(201).redirect('/')
  })


module.exports = {
    requestRoute: route
}