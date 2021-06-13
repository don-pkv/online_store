$('#write-btn').click(() => {
      
      $('#content').load('/component/all-item.html')
      $('.nav-item .active').removeClass('active')
      $("[data-components='make-req']").addClass('active')
    
  },function showAlert(){
      alert('Request received successfully. If you want to provide any other specifications, use contact info given. Meanwhile check after 1-2 days for the link')
  })
  