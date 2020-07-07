$(document).ready(function(){
   animate();
   anchor();
   upbtn();
   formsend();
});

function animate() {
   if ($(window).width() >= 992) {
      new WOW().init();
   }
}

function anchor() {
   $(".nav, .hero__bottom, .portfolio__bottom, .footer__nav").on("click","a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
          top = $(id).offset().top;
      $('html, body, .wrapper').animate({scrollTop: top}, 1000);
   });
}

function upbtn() { 
   $(window).scroll(function() {     
      if ($(window).scrollTop() > 600) {
         $('.up-btn').addClass('show');
      }
      else {
         $('.up-btn').removeClass('show');
      }
   });
   $('.up-btn').on("click", function(event) {
      event.preventDefault();
      var id = $(this).attr('href'),
          top = $(id).offset().top;
      $('html, body, .wrapper').animate({scrollTop: top}, 1000);
   });
}

function formsend() {
   $(document).ready(function() {
      //E-mail Ajax Send
      $("form").submit(function() { //Change
         var th = $(this);
         $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
         }).done(function() {
            $('.contact__send').addClass('thanks');
            setTimeout(function() {
               // Done Functions
               th.trigger("reset");
            }, 1000);
         });
         return false;
      });
   
   });
}