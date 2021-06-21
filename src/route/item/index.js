const Router= require('express')
const multer= require('multer')

const fs = require('fs').promises

const upload = multer({dest: 'uploads/'})
const route= Router()

const{findAllItem,addItem,findOneItem}=require('../../controller/item')
//const{findReview,addReview}=require('../../controller/review')

route.get('/',async (req,res)=>{
    const items= await findAllItem()
    if(!items){ return res.status(200).redirect('/')}
    res.status(200).send(items)
})


route.get('/:id', async (req, res) => {
    let item;
    console.log(req.params.id)
    
    item= await findOneItem(req.params.id)
    
    console.log(item)
    
    if (item) {
        res.status(200).send(item)
    } 

    else {
      res.status(404).send({
      error: 'No such user item exist'
    })
    }
})

route.post('/', upload.single('item_avatar'), async (req, res) => {

    const oldPath = 'uploads/' + req.file.filename
    const newPath = 'images/' + 'avatar_' + req.body.item_name + '.' + req.file.mimetype.split('/').pop()
  
    await fs.rename(oldPath, newPath)        
    
    const item_name= req.body.item_name
    const item_description= req.body.item_description
    const item_link = req.body.item_link
    const item_avatar= 'images/' + 'avatar_' + req.body.item_name +   '.' + req.file.mimetype.split('/').pop()

    const item = await addItem(item_name,item_description,item_link,item_avatar)
  
    res.status(201).redirect('/')
  })

/*route.get('/review', async (req,res)=>{
    const item_id=req.body.item.item_id
   
    const reviews = await findReview(item_id)
   
    res.status(201).send(reviews)
})

route.post('/review/:item_id',async (req,res)=>{
    const item_id=req.params.item_id
    const author= req.body.item_author
    const description= req.body.item_description
    
    const review = await addReview(author,description,item_id)
    
    res.redirect('/api/item')  
})
*/
module.exports={
    itemRoute:route
}