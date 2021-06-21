$(()=>{
    $('#navbar').load('../component/navbar.html',navbar_for_start)
    $('#footer').load('../component/footer.html')
    $('#home').load('../component/home.html')
    $('#content').load('../component/all-item.html')
})

function navbar_for_start(){
    
      //$('a[data-component="add-item"]').css({"display":"none"})     
      //$('a[data-component="admin-logout"]').css({"display":"none"})  
      //$('a[data-component="admin-name"]').css({"display":"none"})  
      $.get('/api/admin/login', ( Admin ) => {
        if(!Admin){           
           $('a[data-component="add-item"]').css({"display":"none"})     
           $('a[data-component="admin-logout"]').css({"display":"none"})
           
        }
        if(Admin){
          $('a[data-component="make-req"]').css({"display":"none"})     
          $('a[data-component="admin-login"]').css({"display":"none"}) 
         
            $('#admin-username-1').append(
              $(`
              <li class="nav-item">
                <a class="nav-link" href="#" data-component="admin-name" >${Admin.admin_name}</a>
              </li>                
              
              `)
            ) 

          $('a[data-component="add-item"]').css({"display":"block"})     
          $('a[data-component="admin-logout"]').css({"display":"block"})
        }
      })
             
}
    

