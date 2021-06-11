/*const { REVIEW }= require('../db/model')

async function findReview(query){
    const where={}
    where.item_id=req.query.item_id
    const reviews= await ITEM.findAllItem({include: [ITEM],where})
    return reviews
}

async function addReview( author,description,item_id){
    if((!author)||(!description)||(!item_id))
    {
        return (new Error("Enter all details for review."))
    }
    const review = await REVIEW.create({
        review_author:author,
        review_description:description,
        item_id
    })
    return review
}

module.exports={
findReview,addReview
}
*/