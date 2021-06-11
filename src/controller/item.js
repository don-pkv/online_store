const{ITEM}=require('../db/model')

async function findAllItem(query)
{   let where = {}
    if(query.item_id){where.item_id=query.item_id}
    const items= await ITEM.findAll({where})
    return items
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
findAllItem,addItem
}