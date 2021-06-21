function loadRequest() {
    $.get('/api/request', (requests) => {
      $('#item-container').append(
         $(`  
            <div class="container">
              <div class="row"> `))  

                  for (let r of requests) {
                    $('#item-container').append(
                      $(`
                          <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                              
                              <div class="card-body">
                                <p class="card-text">${r.request_name}</p>
                                <p class="card-text">${r.request_description.substr(0,140)}</p>
                                
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
 