/*const { REVIEW }= require('../db/model')

async function findReview(item_id){
    const reviews= await ITEM.findAllItem({include: [ITEM],where:{item_id}})
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