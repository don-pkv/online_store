let oneItem=$('.item_123')
oneItem.click((ev) => {
  
 let itemId =$(ev.target).attr('data-component')
 window.itemID=itemId
 $('#content').load('/component/one-item.html') 
})

function loadItem_1() {
 const itemid1=window.itemID
  $.get('/api/item?item_id='+itemid1, (items) => {
       $('#item-container_1').append(
          $(`  
             <div class="container">
               <div class="row"> 
 
                           <div class="col-md-4">
                             <div class="card mb-4 shadow-sm">
                               <image src="${items.item_avatar}" class=" card-img-top" alt="Item image"></image>
                               <div class="card-body">
                                 <p class="card-text">${items.item_name}</p>
                                 <p class="card-text">${items.item_description}</p>
                                 <div class="d-flex justify-content-between align-items-center">
                                   <button type="button" id ="btn_redirect"class="btn btn-sm btn-outline-secondary "><a href="${items.item_link}">${items.item_link}</a></button>                
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