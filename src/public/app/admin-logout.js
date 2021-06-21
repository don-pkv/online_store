$.get('/api/admin/logout',async ()=>{
    $('a[data-component="add-item"]').css({"display":"none"})     
    $('a[data-component="admin-name"]').css({"display":"none"})     
    $('a[data-component="admin-logout"]').css({"display":"none"})
    $('a[data-component="make-req"]').css({"display":"block"})     
    
})
