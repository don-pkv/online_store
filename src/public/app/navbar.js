let navlinks = $('.navbar-nav .nav-link')

navlinks.click((ev) => {

  let componentUrl = `/component/${$(ev.target).attr('data-component')}.html`
  $('#content').load(componentUrl)

})
