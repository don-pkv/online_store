let oneItem=$('.item_123')
oneItem.click((ev) => {
  
 let itemId =$(ev.target).attr('data-component')
 window.itemID=itemId
 $('#content').load('/component/one-item.html') 
})

function loadItem_1() {
 var itemid1=window.itemID
 let itemid_loadItem_1_req='/api/item/'+itemid1.toString()
 $.get(itemid_loadItem_1_req, (item) => {
       $('#item-container_1').append(
          $(`  
             <div class="d-flex align-self-center" >
             <div class="row"> 
 
                           <div class="col-md-4">
                             <div class="card mb-4 shadow-sm ">
                               <image src="${item.item_avatar}" class=" card-img-top" alt="Item image"></image>
                               <div class="card-body">
                                 <p class="card-text">${item.item_name}</p>
                                 <p class="card-text">${item.item_description}</p>
                                  <div class="d-flex justify-content-between align-item-center">
                                     <button type="button" id ="btn_redirect"class="btn btn-sm btn-outline-secondary "><a href="${item.item_link}">${item.item_link}</a></button>                
                                  </div>
                               </div>
                             </div>
                           </div>                 
                         
               </div> 
             </div> 
 
           `)
       )
     })
 
   }