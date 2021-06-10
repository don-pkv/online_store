$('#write-btn').click(() => {
    
      $('#content').load('/component/all-item.html')
      $('.nav-item .active').removeClass('active')
      $("[data-components='all-item']").addClass('active')
    
  })
  