function loadItem() {
 $.get('/api/item', (items) => {
      $('#item-container').append(
         $(`  
            <div class="container">
              <div class="row"> `))  

                  for (let i of items) {
                    
                    $('#item-container').append(
                      $(`
                        
                      
                        <div class="col-md-4" >
                          <a class="item_123" data-component="${i.item_id}">   
                            <div class="card mb-4 shadow-sm" data-component="${i.item_id}">
                              <image src="${i.item_avatar}" class=" card-img-top" alt="Item image" data-component="${i.item_id}"></image>
                              <div class="card-body" data-component="${i.item_id}">
                                <p class="card-text" data-component="${i.item_id}">${i.item_name}</p>
                                <p class="card-text" data-component="${i.item_id}">${i.item_description.substr(0,60)}</p>
                                <div class="d-flex justify-content-between align-items-center" data-component="${i.item_id}">
                                  <button type="button" id ="btn_redirect"class="btn btn-sm btn-outline-secondary "><a href="${i.item_link}">${i.item_link.substr(0,40)}</a></button>                
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                                      
                        `)
                   )
                  }
      $('#item-container').append(
        $(`
              </div>
             </div>
             <script defer src="/app/one-item.js"></script>
            
           
          `)
      )
    })

  }
 