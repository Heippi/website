(function($) {
  alertify.set('notifier','position', 'top-right');
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  $("#btn_innotech").click(function(){
    var email = $("#email_innotech").val()
    if(email == "" || email == null){
      alertify.error("Por favor Ingrese el email")
      return
    }
    var data = {
      recipient_email: email
    }
    $.ajax({
      url: "https://api-metrics.heippi.com/api/v2/send-mail/innotech_info",
      contentType: "application/json",
      method: "POST",
      data: data,
      success: function(result){
        alertify.success("Se envio correctamente el email")
      },
      error: function(xhr){
        alertify.error("Ocurrio un error, por favor intente nuevamente")
      }
    });
  })

  $("#btn_metrics").click(function(){
    var email = $("#email_metrics").val()
    if(email == "" || email == null){
      alertify.error("Por favor Ingrese el email")
      return
    }
    var data = {
      recipient_email: email
    }
    $.ajax({
      url: "https://api-metrics.heippi.com/api/v2/send-mail/innotech_info",
      contentType: "application/json",
      method: "POST",
      data: data,
      success: function(result){
        alertify.success("Se envio correctamente el email")
      },
      error: function(xhr){
        alertify.error("Ocurrio un error, por favor intente nuevamente")
      }
    });
  })

  $("#btn_contact").click(function(){
    var email = $("#email_contact").val()
    var name = $("#name_contact").val()
    var comment = $("#comment_contact").val()
    if(email == "" || email == null){
      alertify.error("Por favor Ingrese el email")
      return
    }
    if(name == "" || name == null){
      alertify.error("Por favor Ingrese el nombre")
      return
    }
    if(comment == "" || comment == null){
      alertify.error("Por favor Ingrese el comentario")
      return
    }
    var data = {
      contact_email: email,
      contact_name: name,
      contact_text: comment
    }
    $.ajax({
      url: "https://api-metrics.heippi.com/api/v2/send-mail/contact",
      contentType: "application/json",
      method: "POST",
      data: data,
      success: function(result){
        alertify.success("Se envio correctamente el formulario de contacto")
      },
      error: function(xhr){
        alertify.error("Ocurrio un error, por favor intente nuevamente")
      }
    });
  })

})(jQuery); // End of use strict
