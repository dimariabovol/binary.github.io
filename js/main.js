$(document).ready(function(){
   // menu();
   // nav();
   // scroll();
   animate();
   // circle();
   // cases();
   anchor();
   upbtn();
});

// function menu() {
//    $(".burger").on('click', function () {
//          var $parent = $(".header");
//          if ($parent.hasClass('mob-menu')) {
//             $parent.removeClass('mob-menu');
//          } else {
//             $parent.addClass('mob-menu');
//          }
//    }); 
//    $(".wrapper").on('click', function(event) {
//       if (!$(event.target).closest(".header").length) {
//          if ($(".header").hasClass("mob-menu")) {
//             $(".header").removeClass("mob-menu");
//          }
//       }
//    });
// }

// function nav() {
//    $('.acc-menu li .name-link').on('click', f_acc);
//       function f_acc(){
//          if ($(window).width() <= 992) {
//             // $('.acc-menu li .acc-body').not($(this).next()).slideUp(300);
//             $(this).next().slideToggle(500);

//             if ($(this).hasClass('acc-open')) {
//                $(this).removeClass('acc-open');
//             } else {
//                $(this).addClass('acc-open');
//             }
//          }  
//       } 
// };

// function scroll(){
//    if ($(window).width() > 992) {
//       var elem = $.jInvertScroll(['.main'],{
//          onScroll: function(percent) {
//             // console.log(percent);
//          }
//       });
//    }  
// };

function animate() {
   if ($(window).width() >= 992) {
      new WOW().init();
   }
};

// function circle() {
//    // new CircleType(document.getElementById('circle-text'));
//    function circularText(txt, radius, classIndex) {
//       txt = txt.split(""),
//         classIndex = document.getElementsByClassName("circle-text")[classIndex];
    
//       var deg = 360 / txt.length,
//         origin = 0;
    
//       txt.forEach((ea) => {
//         ea = `<p style='height:${radius}px;
//     position:absolute;
//     transform:rotate(${origin}deg);
//     transform-origin:0 100%'>${ea}</p>`;
//         classIndex.innerHTML += ea;
//         origin += deg;
//       });
//     }
//     if ($(window).width() <= 992) {
//       circularText("Агенство полного цикла   Агенство полного цикла   ", 65, 0);
//    }
//    else{
//       circularText("Агенство полного цикла   Агенство полного цикла   ", 80, 0);
//    }
// };

// function cases() {
//    $('.cases-list').slick({
//       infinite: true,
//       dots: false,
//       arrows: false,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       rows: 2,
//       autoplay: 300
//     });
// };

function anchor() {
   $(".nav, .hero__bottom, .portfolio__bottom").on("click","a", function (event) {
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
// $(window).scroll(function () {
//    if ($(window).scrollTop() > 125) {
//        $(".header").addClass("head-scroll")
//    } else {
//        $(".header").removeClass("head-scroll")
//    }
//  });