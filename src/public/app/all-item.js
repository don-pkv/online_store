function loadItem() {
    $.get('/api/item', (items) => {
      $('#item-container').append(
         $(`  
            <div class="container">
              <div class="row"> `))  

                  for (let i of items) {
                    $('#item-container').append(
                      $(`
                          <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                              <image src="${i.item_avatar}" class=" card-img-top" alt="Item image"></image>
                              <div class="card-body">
                                <p class="card-text">${i.item_name}</p>
                                <p class="card-text">${i.item_description.substr(0,60)}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                  <button type="button" id ="btn_redirect"class="btn btn-sm btn-outline-secondary "><a href="${i.item_link}">${i.item_link.substr(0,40)}</a></button>                
                                </div>
                              </div>
                            </div>
                          </div>                 
                        `)
                   )
                  }
      $('#item-container').append(
        $(`
              </div>
             </div>
            
           
          `)
      )
    })
  }
 