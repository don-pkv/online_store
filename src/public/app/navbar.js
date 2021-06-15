(()=>{
    (function($){
       "use strict";
        var NAY={};
        NAY.MenuTogglerClose = function(){
          $(".toggler-menu").on('click',function(){
              $('.header-left').stop().toggleClass('menu-open');
          });
          $('.header-left a').on('click',function(){
             var toggle = $('.toggler-menu') 
          });
        }
        $(document).on("ready",function(){
        NAY.MenuTogglerClose();
        });
  })(jQuery);
})

let navlinks = $('.navbar-nav .nav-link')

navlinks.click((ev) => {

  let componentUrl = `/component/${$(ev.target).attr('data-component')}.html`
  $('#content').load(componentUrl)

})
