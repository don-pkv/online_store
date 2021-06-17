const{ITEM}=require('../db/model')

async function findAllItem(){
    const items= await ITEM.findAll()
    return items
}

async function findOneItem(id)
{   
    console.log(id)
    return await ITEM.findByPk(id) 
}

async function addItem(item_name,item_description,item_link,item_avatar){
    if((!item_name)||(!item_description)||(!item_link)||(!item_avatar))
    {
        return (new Error("Enter all the details."))
    }
    const item = await ITEM.create({
        item_name,
        item_description,
        item_link ,
        item_avatar
    })
    return item
}
module.exports={
findAllItem, addItem, findOneItem
}