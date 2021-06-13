const { REQUEST } =require('../db/model')

async function makeRequest(request_name,request_description,request_contact){
    if((!request_name)||(!request_description)||(request_contact))
    {
        return (new Error("Enter all the details."))
    }
    const request = await REQUEST.create({
        request_name,
        request_description,
        request_contact
    })
    return request
}
module.exports={
    makeRequest
}